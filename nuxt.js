import { Join } from "pathe";
import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: Join(__dirname, "components"),
        prefix: "Goku",
      });
    },
  },
});
