### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

* getElementById : এটা দিয়ে একটা element কে নেওয়া যায়, যেটার id আছে।
* getElementsByClassName : এটা দিয়ে একই ক্লাস থাকা অনেকগুলো element একসাথে নেওয়া যায়।
* এটা দিয়ে ইলিমেন্ট কে সিলেক্ট করা যাই কিন্তু সব element না, শুধু প্রথম ম্যাচ হওয়া element দেয়।


### How do you create and insert a new element into the DOM?
* document.createElement()
* document.querySelector()
* document.appendChild()


### What is Event Bubbling and how does it work?
Event Bubbling হলো DOM-এর একটি প্রক্রিয়া যেখানে কোনো child element-এ event ঘটলে সেটা প্রথমে ওই element-এ কাজ করে, তারপর ধাপে ধাপে উপরে ছড়িয়ে যায়।



### What is Event Delegation in JavaScript? Why is it useful?
* Event Delegation হলো এমন একটি تکنিক যেখানে আমরা একটি parent element-এ event listener বসাই, আর সেই listener দিয়ে তার child elements এর events handle করি।

* Child elements-এর উপর আলাদা আলাদা listener না বসিয়ে parent element-এর listener দিয়ে কাজ করা হয়।


### What is the difference between preventDefault() and stopPropagation() methods?
* stopPropagation()
এটি event bubbling বা capturing থামায়।
অর্থাৎ event parent element বা ancestor পর্যন্ত না ওঠা

* preventDefault()
এটি event-এর default behavior বন্ধ করে।
অর্থাৎ ব্রাউজারের ডিফল্ট কাজ না করানো।