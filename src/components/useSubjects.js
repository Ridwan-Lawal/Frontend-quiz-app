import { useEffect } from "react";

export function useSubjects(dispatch, quizzes) {
  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function getQuestions() {
      try {
        const res = await fetch(`http://localhost:3002/quizzes`, { signal });

        if (!res.ok) throw new Error("Something went wrong fetching questions");

        const data = await res.json();
        dispatch({ type: "dataFetched", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;
        dispatch({ type: "dataFailed", payload: quizzes });
      }
    }

    getQuestions();

    return () => abortController.abort();
  }, []);
}
