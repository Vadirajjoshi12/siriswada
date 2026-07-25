import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
collection,
getDocs,
deleteDoc,
doc,
query,
orderBy
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface Review{
id:string;
name:string;
rating:number;
commentText:string;
date:string;
roleLocation:string;
tag:string;
verified:boolean;
}

export default function AdminDashboard(){

const [reviews,setReviews]=useState<Review[]>([]);

useEffect(()=>{

loadReviews();

},[]);

const loadReviews=async()=>{

const q=query(
collection(db,"reviews"),
orderBy("timestamp","desc")
);

const snapshot=await getDocs(q);

const data=snapshot.docs.map(doc=>({

id:doc.id,
...doc.data()

})) as Review[];

setReviews(data);

};

const deleteReview=async(id:string)=>{

if(!confirm("Delete this review?")) return;

if (!window.confirm("Are you sure you want to permanently delete this review?")) {
  return;
}

await deleteDoc(doc(db, "reviews", id));

setReviews(prev=>prev.filter(r=>r.id!==id));

};

const average=
reviews.length===0
?0
:(
reviews.reduce((a,b)=>a+b.rating,0)
/reviews.length
).toFixed(1);

return(

<div className="min-h-screen bg-stone-100 p-10">

<h1 className="text-4xl font-bold mb-8">

Siriswada Admin Dashboard

</h1>

<div className="grid md:grid-cols-3 gap-6 mb-10">

<div className="bg-white rounded-xl p-6 shadow">

<h2 className="text-gray-500">

Total Reviews

</h2>

<p className="text-4xl font-bold">

{reviews.length}

</p>

</div>

<div className="bg-white rounded-xl p-6 shadow">

<h2 className="text-gray-500">

Average Rating

</h2>

<p className="text-4xl font-bold">

⭐ {average}

</p>

</div>

<div className="bg-white rounded-xl p-6 shadow">

<h2 className="text-gray-500">

Products

</h2>

<p className="text-4xl font-bold">

2

</p>

</div>

</div>

<div className="space-y-5">

{reviews.map(review=>(

<div
key={review.id}
className="bg-white rounded-xl p-6 shadow flex justify-between items-center"
>

<div>

<h2 className="font-bold text-xl">

{review.name}

</h2>

<p>

⭐ {review.rating}

</p>

<p>

{review.commentText}

</p>

<p className="text-sm text-gray-500">

{review.date}

</p>

</div>

<button

onClick={()=>deleteReview(review.id)}

className="bg-red-600 text-white px-5 py-2 rounded"

>

Delete

</button>

</div>

))}

</div>

</div>

);

}