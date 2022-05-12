<script>
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';
	// let feedback = [
	// 	{
	// 		id: 1,
	// 		rating: 10,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',

	// 	},
	// 	{
	// 		id: 2,
	// 		rating: 8,
	// 		text: 'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',
	// 	},
	// 	{
	// 		id: 3,
	// 		rating: 9,
	// 		text: 'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',
	// 	},
	// 	{
	// 		id: 4,
	// 		rating: 6,
	// 		text: 'Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',
	// 	},
	
	// ];
	
	// const deleteFeedback = (e) => {
	// 	const itemId = e.detail;
	// 	feedback = feedback.filter((item) => item.id != itemId)
	// }

	// adds the new feedback that got from the submit of the feedback form into array, array is already displayed so no need to reconstruct it
	// const addFeedback = (e) => {
	// 	const newFeedback = e.detail;
	// 	feedback = [newFeedback, ...feedback];
	// }
</script>

<main class="container">
	<FeedbackForm />  
	<FeedbackStats />
	<FeedbackList />
</main>

