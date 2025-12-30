# volusion-in-platform-blog-backup
a backup of all the code written for volusions in platform blog pages created by me


BLOG PAGE:

blog page only had v1, this one required the least amount of functionality to be created for it so I did not go through multiple iterations on it


BLOG-LIST-PAGE:

V1 - This was my first approach with a outdated model using parent row elements. I quickly realized this would not be very easy for MX's who are not html experts to work with and reversing the card order for the js functionality of having the last html card entry show up first proved to be more difficult and less feasible with this approach without making it significantly more complicated for the end user.

V2 - This was my second approach with removing the parent row containers and relying more heavily on flexbox to position and wrap the elements into rows. This allowed for the implementation of the javascript function to reverse the css order of the elements to achieve the end goal of having the laste html card added to show up first as the "latest post"

V3 - This was the finalized version. It is identical to V2 but with a few small changes. This approach brings in the javascript hosted externally with a simple scrip tag rather than having the raw javascript in the html. I feared having the javascript there would be a visual intimidation factor to MX's who are not masters of editing and managing html. So to reduce that I hosted the JS externally on github pages and called it in via a script tag. The additional change was due to the previous change. I noticed with the js being linked externally there was a brief milisecond on page load when the prowser painted the content that the cards were not reversed, then they would reverse as the js ran. To correct this I set the card parent container to visibility hidden so it is hidden on page load, and added into the js that when it finishes its reverse function to change the parent container visibility to visible. This way that brief milisecond before the cards are reversed, they are hidden and that will visually not be seen.

JS:

V1 - This is the initial approach I took to reversing the cards order. It will find all html elements with the class blog-card, then create a a variable of total based on how many elements were found, and from there it will assign each element a css order property based on the total variable minus its current index (which index starts at 0). As an example, if the total variable is 9 blog cards, the third blog-card element in the index (which since starting at 0 would mean it would have an index of 2) would be assigned an order of 7 because it would be 9 - 2
This way it essentially reverses the display order of the html elements so merchants do not have to worry about adding new blog cards to the top of the html card elements, but can more easily just add it below the last entry, and the last one will show up first as it will be the "latest entry".

V2 - This is the same function but with the added functionality of finding the card list container, and once it finishes running it sets the visibility to visible. For additonal details as to why see BLOG-LIST-PAGE: V3 
