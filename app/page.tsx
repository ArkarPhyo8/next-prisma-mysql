import Table from "@/components/Table";
import WorkListPage from "@/components/WorkListPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container px-20 mt-8">
      <WorkListPage />
      <div className="mt-20">
        <Table />
      </div>
    </main>
  );
}
