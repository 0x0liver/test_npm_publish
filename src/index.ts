export type Swap = {
  from: string,
  to: string,
  amount: number
}

async function swap(swap: Swap): Promise<void> {
  // Swap logic here
  console.log(`Swapping ${swap.amount} ${swap.from} to ${swap.to}`);
}