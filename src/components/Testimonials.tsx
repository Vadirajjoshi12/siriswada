import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, MessageSquarePlus, CheckCircle2, User, Sparkles } from 'lucide-react';
import { db } from "../firebase";

import {
collection,
addDoc,
getDocs,
orderBy,
query
} from "firebase/firestore";

export interface UserReview {
  id: string;
  name: string;
  roleLocation: string;
  rating: number;
  commentText: string;
  tag: 'Family' | 'Fitness' | 'Senior' | 'Kids';
  verified: boolean;
  date: string;
}


export const Testimonials: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [filterTag, setFilterTag] = useState<string>('All');
  
  // Form state
  const [showForm, setShowForm] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [roleLocation, setRoleLocation] = useState<string>('');
  const [tag, setTag] = useState<'Family' | 'Fitness' | 'Senior' | 'Kids'>('Family');
  const [commentText, setcommentText] = useState<string>('');
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [reviews, setReviews] = useState<UserReview[]>([]);

  // Load reviews from local storage on initial mount
  useEffect(() => {

const loadReviews = async () => {

const q = query(
collection(db,"reviews"),
orderBy("timestamp","desc")
);

const snapshot = await getDocs(q);

const data = snapshot.docs.map(doc => ({
id: doc.id,
...doc.data()
})) as UserReview[];

setReviews(data);

};

loadReviews();

}, []);


  const handleRatingClick = (num: number) => {
    setRating(num);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (submitting) return;
  setSubmitting(true);
  const userName = name.trim();
  const reviewText = commentText.trim();
  if (reviewText.length < 10) {
      alert("Review must contain at least 10 characters.");
      return;
    }

    if (reviewText.length > 500) {
      alert("Review cannot exceed 500 characters.");
      return;
    }
    if (userName.length < 2) {
      alert("Name must be at least 2 characters.");
      return;
    }

    if (userName.length > 50) {
      alert("Name cannot exceed 50 characters.");
      return;
    }

    const nameRegex = /^[A-Za-z0-9 .'-]+$/;

    if (!nameRegex.test(userName)) {
      alert("Please enter a valid name.");
      return;
    }
    if (!userName || !reviewText) {

    setSubmitting(false);

    return;

  }
    const lastReviewTime = Number(
  localStorage.getItem("lastReviewTime")
);

if (
  lastReviewTime &&
  Date.now() - lastReviewTime < 5 * 60 * 1000
) {
  alert("Please wait 5 minutes before submitting another review.");
  setSubmitting(false);
  return;
}
        const duplicate = reviews.some(
    (review)=>

    review.name.toLowerCase()===userName.toLowerCase()

    &&

    review.commentText.toLowerCase()===reviewText.toLowerCase()

    );

    if(duplicate){

    alert("You've already submitted this review.");

    setSubmitting(false);

    return;

    }
    const newReview: UserReview = {
      id: Date.now().toString(),
      name: userName,
      roleLocation: roleLocation.trim() || 'Verified Customer',
      rating,
      commentText: reviewText,
      tag,
      verified: isVerified,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

   try {

  await addDoc(collection(db, "reviews"), {

    name: newReview.name,

    roleLocation: newReview.roleLocation,

    rating: newReview.rating,

    commentText: newReview.commentText,

    tag: newReview.tag,

    verified: newReview.verified,

    date: newReview.date,

    timestamp: Date.now()

  });


}
catch (error) {

  console.error(error);

  alert("Something went wrong while submitting your review.");

  setSubmitting(false);

  return;

}
localStorage.setItem(
"lastReviewTime",
Date.now().toString()
);

setReviews(prev => [newReview, ...prev]);

    // Reset form
    setName('');
    setRoleLocation('');
    setcommentText('');
    setRating(5);
    setSubmittedSuccess(true);
    setSubmitting(false);

    setTimeout(() => {
      setSubmittedSuccess(false);
      setShowForm(false);
    }, 2500);
  };

  const tags = ['All', 'Family', 'Kids', 'Fitness', 'Senior'];

  const filteredReviews = filterTag === 'All'
    ? reviews
    : reviews.filter(r => r.tag === filterTag);

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <section id="testimonials" className="py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Transparent Customer Voice
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 font-sans">
            Customer Reviews & Ratings<span className="text-amber-800">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            We value genuine feedback. Share your experience with Siriswada Nutrimix and help other families make healthy choices.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-4xl sm:text-5xl font-bold text-neutral-900 font-sans">
                {reviews.length > 0 ? averageRating : '5.0'}
              </span>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  {reviews.length === 0 ? 'Be the first to review!' : `Based on ${reviews.length} customer review${reviews.length > 1 ? 's' : ''}`}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4" />
                Write a Review
              </button>
            )}
          </div>
        </div>

        {/* Review Form Drawer/Box */}
        {showForm && (
          <div className="mt-8 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-lg relative animate-fade-in">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
              <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-amber-800" />
                Share Your Product Review
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-xs text-neutral-500 hover:text-neutral-900 font-semibold px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
              >
                Cancel
              </button>
            </div>

            {submittedSuccess ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900">Thank You for Your Feedback!</h4>
                <p className="text-sm text-neutral-600">Your review has been successfully recorded and published below.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Overall Rating <span className="text-amber-800">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110 focus:outline-hidden"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            (hoverRating || rating) >= star
                              ? 'fill-amber-500 text-amber-500'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-semibold text-neutral-600">
                      {rating === 5 && '5/5 - Excellent!'}
                      {rating === 4 && '4/5 - Very Good'}
                      {rating === 3 && '3/5 - Average'}
                      {rating === 2 && '2/5 - Fair'}
                      {rating === 1 && '1/5 - Poor'}
                    </span>
                  </div>
                </div>

                {/* Name & Location Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-amber-800">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:outline-hidden text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Role / Location (Optional)
                    </label>
                    <input
                      type="text"
                      value={roleLocation}
                      onChange={(e) => setRoleLocation(e.target.value)}
                      placeholder="e.g. Bengaluru"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:outline-hidden text-sm"
                    />
                  </div>
                </div>

                {/* Category & Verified */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Primary Usage Focus
                    </label>
                    <select
                      value={tag}
                      onChange={(e) => setTag(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:outline-hidden text-sm bg-white"
                    >
                      <option value="Family">Family Health</option>
                      <option value="Kids">Kids Nutrition</option>
                      <option value="Fitness">Fitness & Stamina</option>
                      <option value="Senior">Senior Care</option>
                    </select>
                  </div>

                  <div className="flex items-center pt-6">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-neutral-700">
                      <input
                        type="checkbox"
                        checked={isVerified}
                        onChange={(e) => setIsVerified(e.target.checked)}
                        className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 w-4 h-4"
                      />
                      Mark as Verified Customer
                    </label>
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Your Review & Experience <span className="text-amber-800">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={commentText}
                    onChange={(e) => setcommentText(e.target.value)}
                    placeholder="Tell us how Siriswada Nutrimix tasted, how you mixed it (with milk, smoothies, porridge), and its effect on your daily energy..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:outline-hidden text-sm"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-md cursor-pointer"
                  >
                    {submitting ? "Submitting..." : "Submit Review"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filter buttons if there are reviews */}
        {reviews.length > 0 && (
          <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilterTag(t)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filterTag === t
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {t === 'All' ? 'All Reviews' : `${t} Focus`}
              </button>
            ))}
          </div>
        )}

        {/* Reviews Grid or Empty State */}
        <div className="mt-10">
          {reviews.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-neutral-200/80 max-w-2xl mx-auto space-y-4">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-800">
                <MessageSquarePlus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">No Customer Reviews Yet</h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Be the very first customer to submit a rating and share your genuine product experience!
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-800 text-white text-xs font-semibold hover:bg-amber-900 transition-all shadow-md cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4" />
                Write the First Review
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReviews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    {/* Header: Stars & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-[11px] text-neutral-400 font-medium">{item.date}</span>
                    </div>

                    <p className="text-neutral-800 text-sm sm:text-base leading-relaxed italic">
                      "{item.commentText}"
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-stone-100 text-neutral-700 font-bold flex items-center justify-center text-sm border border-neutral-200">
                        <User className="w-5 h-5 text-neutral-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-neutral-900">{item.name}</h4>
                          {item.verified && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                              <ShieldCheck className="w-3 h-3" />
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-500">{item.roleLocation}</p>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Aggregate Stats Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 rounded-3xl bg-white border border-neutral-200/80 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 font-sans">
              {reviews.length > 0 ? `${averageRating}/5` : '100%'}
            </div>
            <div className="text-xs text-neutral-500 mt-1">Authentic & Verified</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 font-sans">11+</div>
            <div className="text-xs text-neutral-500 mt-1">Raw Super Ingredients</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 font-sans">100%</div>
            <div className="text-xs text-neutral-500 mt-1">Chemical & Sugar Free</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 font-sans">
              {reviews.length > 0 ? `${reviews.length}` : '0'}
            </div>
            <div className="text-xs text-neutral-500 mt-1">Verified Customer Reviews</div>
          </div>
        </div>

      </div>
    </section>
  );
};

