import ActualTransactionPriceChart from "@/common/components/ActualTransactionPriceChart";

export default async function Home() {
  return (
    <main>
      <h1>Mobile</h1>
      <div className="inline-block w-full p-6">
        <ActualTransactionPriceChart />
      </div>
    </main>
  );
}
