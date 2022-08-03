<script>
	import PageTitle from '../components/PageTitle';

	const now = new Date();
	const greeting = now.getHours() > 4 && now.getHours() < 10 ? 'Good morning!' : 'Hello!';
</script>

<PageTitle title={greeting} />
