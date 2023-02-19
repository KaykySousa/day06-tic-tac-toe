<script lang="ts">
	import Board from "./components/Board.svelte"
	import { playerTurn, resetGame, winner } from "./stores"
</script>

<div
	class="min-h-screen w-full bg-lime-400 flex flex-col justify-center items-center px-6"
>
	<div class="max-w-md w-full flex flex-col">
		<div
			class="w-full mt-6 text-white font-bold text-2xl flex flex-col mb-6 sm:flex-row sm:items-end sm:justify-between"
		>
			<p class="text-white text-4xl font-bold mb-1 sm:mb-0">
				TIC-TAC-TOE
			</p>
			<p>VEZ DE: {$playerTurn ? "X" : "O"}</p>
		</div>
		<Board />
	</div>

	{#if $winner}
		<div
			class="fixed top-0 left-0 bg-lime-400 w-full h-full flex justify-center items-center"
		>
			<div class="bg-white p-6 rounded">
				<p class="text-3xl text-lime-400 font-bold text-center mb-4">
					{#if $winner === "Draw"}
						EMPATE
					{:else}
						VENCEDOR: {$winner}
					{/if}
				</p>
				<button
					class="h-12 w-full bg-lime-400 text-white font-semibold text-lg rounded px-3"
					on:click={resetGame}>JOGAR NOVAMENTE</button
				>
			</div>
		</div>
	{/if}
</div>
