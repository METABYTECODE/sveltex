<script lang="ts">
	// Импорты для иконок (если используешь)
	import { fade } from 'svelte/transition';
</script>

<div class="page" transition:fade>
	<!-- Герой-секция -->
	<section class="hero">
		<h1>Добро пожаловать в <span class="highlight">SvelteKit</span></h1>
		<p class="subtitle">Самый быстрый способ создавать веб-приложения</p>
		<div class="cta-buttons">
			<button class="btn primary">Начать</button>
			<button class="btn secondary">Документация</button>
		</div>
	</section>

	<!-- Карточки фич -->
	<div class="features">
		<div class="feature-card">
			<div class="icon">⚡</div>
			<h3>Молниеносно</h3>
			<p>Оптимизированная производительность из коробки</p>
		</div>

		<div class="feature-card">
			<div class="icon">🧩</div>
			<h3>Простота</h3>
			<p>Минимум шаблонного кода, максимум результата</p>
		</div>

		<div class="feature-card">
			<div class="icon">🔌</div>
			<h3>Гибкость</h3>
			<p>Легко расширяется и настраивается</p>
		</div>
	</div>
</div>

<style>
	.page {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero {
		text-align: center;
		padding: 4rem 0;
	}

	.hero h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.highlight {
		color: #ff3e00;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #666;
		margin-bottom: 2rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}

	.primary {
		background: #ff3e00;
		color: white;
		border: none;
	}

	.secondary {
		background: transparent;
		color: #ff3e00;
		border: 2px solid #ff3e00;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.feature-card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
	}

	.feature-card:hover {
		transform: translateY(-5px);
	}

	.icon {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1.2rem;
		}
	}
</style>
