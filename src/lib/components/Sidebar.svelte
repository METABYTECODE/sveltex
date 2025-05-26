<script lang="ts">
	export let collapsed = false;

	let sections = [
		{
			title: 'Основное',
			items: [
				{ icon: '🏠', name: 'Главная', href: '/' },
				{ icon: '📊', name: 'Аналитика', href: '/analytics' }
			]
		},
		{
			title: 'Управление',
			items: [
				{ icon: '👥', name: 'Пользователи', href: '/users' },
				{ icon: '⚙️', name: 'Настройки', href: '/settings' }
			]
		}
	];
</script>

<aside class="sidebar {collapsed ? 'collapsed' : ''}">
	<button class="toggle-btn" on:click={() => (collapsed = !collapsed)}>
		{collapsed ? '➡️' : '⬅️'}
	</button>

	{#each sections as section}
		<div class="section">
			{#if !collapsed}
				<h3 class="section-title">{section.title}</h3>
			{/if}

			<div class="section-items">
				{#each section.items as item}
					<a href={item.href} class="sidebar-link">
						<span class="icon">{item.icon}</span>
						{#if !collapsed}
							<span class="name">{item.name}</span>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	{/each}
</aside>

<style>
	.sidebar {
		width: 250px;
		height: 100%;
		background-color: #ffffff;
		border-right: 1px solid #e5e7eb;
		padding: 1rem;
		transition: all 0.3s ease;
		position: relative;
		overflow-x: hidden;
	}

	.sidebar.collapsed {
		width: 60px;
	}

	.toggle-btn {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		z-index: 10;
	}

	.section {
		margin-bottom: 1.5rem;
	}

	.section-title {
		font-size: 0.75rem;
		text-transform: uppercase;
		color: #6b7280;
		margin-bottom: 0.5rem;
		padding-left: 0.5rem;
	}

	.sidebar-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem;
		border-radius: 0.375rem;
		color: #4b5563;
		text-decoration: none;
		margin-bottom: 0.25rem;
	}

	.sidebar-link:hover {
		background-color: #f3f4f6;
	}

	.icon {
		font-size: 1.25rem;
		min-width: 24px;
		text-align: center;
	}

	.name {
		white-space: nowrap;
	}

	/* Темная тема */
	.dark .sidebar {
		background-color: #1f2937;
		border-right-color: #374151;
	}

	.dark .section-title {
		color: #9ca3af;
	}

	.dark .sidebar-link {
		color: #d1d5db;
	}

	.dark .sidebar-link:hover {
		background-color: #374151;
	}
</style>
