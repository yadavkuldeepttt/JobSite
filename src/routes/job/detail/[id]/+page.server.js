import { error } from "@sveltejs/kit";
import { details } from "../jobdetail";

export function load({ params }) {
  const detail = details.find(({ detail }) => detail.id === Number(params.id));
  if (!detail) throw error(404);

  return {
    props: {
      detail,
    },
  };
}
