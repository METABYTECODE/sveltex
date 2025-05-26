<script lang="ts">
	export let title = 'Мой Проект';
	export let darkMode = false;

	let menuItems = [
		{ name: 'Главная', href: '/' },
		{ name: 'Проекты', href: '/projects' },
		{ name: 'Контакты', href: '/contact' }
	];

	function toggleDarkMode() {
		darkMode = !darkMode;
		document.documentElement.classList.toggle('dark', darkMode);
	}
</script>

<header class="header {darkMode ? 'dark' : ''}">
	<div class="logo">
		<span class="text">{title}</span>
	</div>

	<nav class="nav">
		{#each menuItems as item}
			<a href={item.href} class="nav-link">{item.name}</a>
		{/each}
	</nav>

	<div class="actions">
		<button on:click={toggleDarkMode} class="theme-toggle">
			{darkMode ? '☀️' : '🌙'}
		</button>
	</div>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		background-color: #ffffff;
		border-bottom: 1px solid #e5e7eb;
		transition: all 0.3s ease;
	}

	.header.dark {
		background-color: #1f2937;
		border-bottom-color: #374151;
	}

	.logo .text {
		font-size: 1.5rem;
		font-weight: 700;
		color: #3b82f6;
	}

	.header.dark .logo .text {
		color: #60a5fa;
	}

	.nav {
		display: flex;
		gap: 1.5rem;
	}

	.nav-link {
		color: #4b5563;
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 0;
		position: relative;
	}

	.header.dark .nav-link {
		color: #d1d5db;
	}

	.nav-link:hover {
		color: #3b82f6;
	}

	.theme-toggle {
		background: none;
		border: none;
		font-size: 1.2rem;
		cursor: pointer;
		padding: 0.5rem;
	}
</style>
