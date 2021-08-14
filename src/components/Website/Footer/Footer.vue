<template>
  <footer class="bg-gray-900">
    <div class="container">
    <div class="mx-auto flex flex-wrap text-center md:text-left">
      <div class="footerBlock">
        <h2 class="footerHead">Links</h2>
        <ul>
        <li>
          <router-link to="/">
          Home
        </router-link>
       </li>
        <li>
          <router-link to="/cases">
          Cases
        </router-link>
       </li>
        <li>
          <router-link to="#">
          Contact
        </router-link>
       </li>
      </ul>
      </div>
      <div class="footerBlock">
        <h2 class="footerHead">Info</h2>
        <ul>
          <li>Privacyverklaring</li>
          <li>KVK 1111122222</li>
          <li>1221aa Amsterdam</li>
        </ul>
      </div>
      <div class="footerBlock">
        <h2 class="footerHead">Contactgegevens</h2>
        <ul>
          <li>+316545053</li>
          <li>Straatnaam 5</li>
          <li>1111aa Amsterdam</li>
        </ul>
        <p> <a class="text-main" href="mailto:info@website-fabriek.nl">info@website-fabriek.nl</a></p>
      </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss" src="@/components/Website/Footer/footer.scss"></style>
<!-- {{ getPostAcfValue(post, "button_text") }} -->