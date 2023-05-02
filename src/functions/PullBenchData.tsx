import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface BenchData {
  date: string;
  weight: number;
}

export default function PullBenchData() {
  const supabase = useSupabaseClient();
  const [benchData, setBenchData] = useState<BenchData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("pr_data")
        .select("date, weight")
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
        .eq("exercise", "bench")
        .order("date", { ascending: true });
      if (error) console.log("error", error);
      if (data) setBenchData(data);
    };
    fetchData();
  }, [supabase]);

  return benchData;
}
