// api: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib2F3YnZka2dieHV5aWh1eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MzAsImV4cCI6MjAxMjQyNzUzMH0.Iq40XCZG1EvkMh2BD41TMTkAK97Ow5WwUwb_7tDsZeI
// url: https://cboawbvdkgbxuyihuyzj.supabase.co/rest/v1/matas_products

import Main from "@/components/Main";
export const dynamic = "force-dynamic";

export default async function Home() {
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib2F3YnZka2dieHV5aWh1eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MzAsImV4cCI6MjAxMjQyNzUzMH0.Iq40XCZG1EvkMh2BD41TMTkAK97Ow5WwUwb_7tDsZeI",
    Prefer: "return=representation",
  };
  let response = await fetch(`https://cboawbvdkgbxuyihuyzj.supabase.co/rest/v1/matas_products`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  // console.log(data);

  return <Main data={data} />;
}
