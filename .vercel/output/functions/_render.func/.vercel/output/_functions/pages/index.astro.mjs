import { a as createComponent, r as renderTemplate, b as renderHead, d as createAstro } from '../chunks/astro/server_DE3XddSh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let errorMessage = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const username = data.get("username")?.toString().trim();
      const password = data.get("password")?.toString().trim();
      console.log("Login attempt with:", {
        username,
        password,
        usernameMatch: username === "swelltech",
        passwordMatch: password === "swellawesome"
      });
      if (username === "swelltech" && password === "swellawesome") {
        console.log("Login successful, redirecting...");
        return Astro2.redirect("/main/");
      } else {
        console.log("Login failed: Invalid credentials");
        errorMessage = "Invalid username or password";
      }
    } catch (error) {
      console.error("Login error:", error);
      errorMessage = "An error occurred during login";
    }
  }
  return renderTemplate`<html class="astro-j7pv25f6"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Login - Swell Documentation</title>${renderHead()}</head> <body class="astro-j7pv25f6"> <div class="login-container astro-j7pv25f6"> <div class="login-box astro-j7pv25f6"> <img src="/Swell Wordmark Purplepng.png" alt="Swell Logo" class="logo astro-j7pv25f6"> <h2 class="astro-j7pv25f6">Support Team Documentation</h2> ${errorMessage && renderTemplate`<p class="error astro-j7pv25f6">${errorMessage}</p>`} <form method="POST" class="astro-j7pv25f6"> <div class="form-group astro-j7pv25f6"> <label for="username" class="astro-j7pv25f6">Username</label> <input type="text" id="username" name="username" required autocomplete="username" class="astro-j7pv25f6"> </div> <div class="form-group astro-j7pv25f6"> <label for="password" class="astro-j7pv25f6">Password</label> <input type="password" id="password" name="password" required autocomplete="current-password" class="astro-j7pv25f6"> </div> <button type="submit" class="astro-j7pv25f6">Login</button> </form> </div> </div>  </body> </html>`;
}, "/Users/jesseemmanuelbautista/Desktop/swell-sop-docs/src/pages/index.astro", void 0);

const $$file = "/Users/jesseemmanuelbautista/Desktop/swell-sop-docs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
