import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';

interface SanityComment {
  _id: string;
  name: string;
  comment: string;
  _createdAt: string;
}

interface SanityCommentsProps {
  postId: string;
  comments: SanityComment[];
}

export default function SanityComments({ postId, comments }: SanityCommentsProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: postId,
          name: formData.name.trim() || 'Anonymous',
          email: formData.email.trim() || 'hidden@example.com',
          comment: formData.comment,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', comment: '' });
      
      // Reset success message after 8 seconds
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="mt-20 pt-16 border-t border-slate-100">
      <h3 className="text-2xl font-black uppercase tracking-widest text-slate-900 mb-2">
        Comments &amp; Feedback
      </h3>
      <p className="text-lg font-medium text-slate-500 mb-12">
        Have questions or thoughts on this project? I'd love to hear from you.
      </p>

      {/* Render Existing Comments */}
      <div className="space-y-8 mb-16">
        {comments?.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-black text-lg">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 tracking-tight text-lg">{comment.name}</h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
                    {formatDate(comment._createdAt)}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed pl-16">
                {comment.comment}
              </p>
            </div>
          ))
        ) : (
          <div className="p-8 text-center bg-slate-50 border border-slate-100 rounded-[2rem]">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No comments yet. Be the first!</p>
          </div>
        )}
      </div>

      {/* Comment Form */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
        <h4 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Leave a Reply</h4>
        
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center text-green-600">
            <CheckCircle2 size={48} className="mb-4" />
            <h5 className="text-2xl font-black mb-2 text-slate-900">Comment Submitted!</h5>
            <p className="text-slate-500 font-medium">Your comment is successfully pending review. It will appear once approved.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <User size={12} className="inline mr-1.5" /> Full Name (Optional)
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Anonymous"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <Mail size={12} className="inline mr-1.5" /> Email (Optional & Private)
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-slate-900 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                <MessageSquare size={12} className="inline mr-1.5" /> Your Comment
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What did you think of this article?"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-slate-900 font-medium resize-none"
              ></textarea>
            </div>

            {error && <p className="text-red-500 font-bold text-sm px-2 text-center uppercase tracking-widest">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-3 py-5 bg-red-600 text-white rounded-full font-black text-lg uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-100 active:scale-95 disabled:bg-slate-300 disabled:shadow-none"
            >
              {submitting ? 'Submitting...' : 'Post Comment'} <Send size={20} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
