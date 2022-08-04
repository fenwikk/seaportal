<script lang="ts">
	import PageTitle from '../components/PageTitle';
	import Puppeteer from "puppeteer"
import { browser } from '$app/env';
import screenshot from './stores/screenshot';
import type { Stringifier } from 'postcss';

	const now = new Date();
	const greeting = now.getHours() > 4 && now.getHours() < 10 ? 'Good morning!' : 'Hello!';

	let screenshotUrl: string

	const generateBlobUrl = async () => {
		const blob = await fetch(`data:application/octet-stream;base64,${$screenshot}`)
		screenshotUrl = URL.createObjectURL(await blob.blob())
	}
	generateBlobUrl()
</script>

<PageTitle title={greeting} />

<img src={screenshotUrl} alt="">
