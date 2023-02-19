<script lang="ts">
	import { checkWinner, playerTurn, squares, winner } from "../stores"
	import Square from "./Square.svelte"

	function handleSquareClick(index: number) {
		if ($squares[index] || $winner) return

		$squares[index] = $playerTurn ? "X" : "O"
		playerTurn.update((current) => (current + 1) % 2)

		checkWinner($squares)
	}
</script>

<div class="w-full aspect-square grid grid-cols-3 grid-rows-3 gap-3">
	{#each $squares as square, index}
		<Square symbol={square} on:click={() => handleSquareClick(index)} />
	{/each}
</div>
