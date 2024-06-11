import styles from "./BlogDetails.module.scss";

import Image from "next/image";

import Image1 from "@/../public/фото3 1.png";
import Image2 from "@/../public/фото4 1.png";

export default function BlogDetails() {
  return (
    <section className={styles.root}>
      <article className={styles.top_block}>
        <Image alt="Blog" src={Image1} width={1100} height={730} />
        <div className={styles.text_block}>
          <h2>Назва статті</h2>
          <p>
            Suspendisse ut dignissim purus. Morbi consequat vehicula lectus non
            molestie. Nulla sapien ante, hendrerit in diam sed, commodo varius
            mi. Nam erat lorem, facilisis sit amet varius eget, faucibus sit
            amet arcu. Aenean pulvinar erat ut arcu elementum molestie. Donec
            pulvinar molestie vehicula. Donec mauris sem, fermentum nec faucibus
            in, porta vel lectus. Ut elementum tristique lectus non vulputate.
          </p>
          <p>
            Nam gravida sem eu dolor malesuada, quis varius nulla laoreet.
            Mauris consequat eros a ex scelerisque, vel mollis mauris
            sollicitudin. Etiam semper orci purus, eget ornare erat blandit a.
            Donec feugiat lacus in justo posuere gravida. Proin pretium sapien
            vitae odio iaculis blandit. Quisque nunc augue, pellentesque sit
            amet justo eu, elementum pretium orci. Aenean sit amet eros ornare,
            facilisis nibh vel, molestie nisl. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nunc vitae consectetur purus. Nulla
            ex ex, fermentum eget lacus ac, bibendum convallis justo. Nullam
            mattis diam vel nulla porta laoreet.
          </p>
        </div>
      </article>
      <div className={styles.blog_text}>
        <h2>Заголовок</h2>
        <p>
          Suspendisse ut dignissim purus. Morbi consequat vehicula lectus non
          molestie. Nulla sapien ante, hendrerit in diam sed, commodo varius mi.
          Nam erat lorem, facilisis sit amet varius eget, faucibus sit amet
          arcu. Aenean pulvinar erat ut arcu elementum molestie. Donec pulvinar
          molestie vehicula. Donec mauris sem, fermentum nec faucibus in, porta
          vel lectus. Ut elementum tristique lectus non vulputate.
        </p>
        <p>
          Nam gravida sem eu dolor malesuada, quis varius nulla laoreet. Mauris
          consequat eros a ex scelerisque, vel mollis mauris sollicitudin. Etiam
          semper orci purus, eget ornare erat blandit a. Donec feugiat lacus in
          justo posuere gravida. Proin pretium sapien vitae odio iaculis
          blandit. Quisque nunc augue, pellentesque sit amet justo eu, elementum
          pretium orci. Aenean sit amet eros ornare, facilisis nibh vel,
          molestie nisl. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc vitae consectetur purus. Nulla ex ex, fermentum eget
          lacus ac, bibendum convallis justo. Nullam mattis diam vel nulla porta
          laoreet.
        </p>
      </div>
      <div className={styles.blog_text}>
        <h2>Заголовок</h2>
        <p>
          Suspendisse ut dignissim purus. Morbi consequat vehicula lectus non
          molestie. Nulla sapien ante, hendrerit in diam sed, commodo varius mi.
          Nam erat lorem, facilisis sit amet varius eget, faucibus sit amet
          arcu. Aenean pulvinar erat ut arcu elementum molestie. Donec pulvinar
          molestie vehicula. Donec mauris sem, fermentum nec faucibus in, porta
          vel lectus. Ut elementum tristique lectus non vulputate.
        </p>
        <p>
          Nam gravida sem eu dolor malesuada, quis varius nulla laoreet. Mauris
          consequat eros a ex scelerisque, vel mollis mauris sollicitudin. Etiam
          semper orci purus, eget ornare erat blandit a. Donec feugiat lacus in
          justo posuere gravida. Proin pretium sapien vitae odio iaculis
          blandit. Quisque nunc augue, pellentesque sit amet justo eu, elementum
          pretium orci. Aenean sit amet eros ornare, facilisis nibh vel,
          molestie nisl. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc vitae consectetur purus. Nulla ex ex, fermentum eget
          lacus ac, bibendum convallis justo. Nullam mattis diam vel nulla porta
          laoreet.
        </p>
      </div>
      <Image
        alt="Image blog 2"
        src={Image2}
        width={900}
        height={600}
        className={styles.bottom_image}
      />
      <div className={styles.blog_text}>
        <h2>Заголовок</h2>
        <p>
          Suspendisse ut dignissim purus. Morbi consequat vehicula lectus non
          molestie. Nulla sapien ante, hendrerit in diam sed, commodo varius mi.
          Nam erat lorem, facilisis sit amet varius eget, faucibus sit amet
          arcu. Aenean pulvinar erat ut arcu elementum molestie. Donec pulvinar
          molestie vehicula. Donec mauris sem, fermentum nec faucibus in, porta
          vel lectus. Ut elementum tristique lectus non vulputate.
        </p>
        <p>
          Nam gravida sem eu dolor malesuada, quis varius nulla laoreet. Mauris
          consequat eros a ex scelerisque, vel mollis mauris sollicitudin. Etiam
          semper orci purus, eget ornare erat blandit a. Donec feugiat lacus in
          justo posuere gravida. Proin pretium sapien vitae odio iaculis
          blandit. Quisque nunc augue, pellentesque sit amet justo eu, elementum
          pretium orci. Aenean sit amet eros ornare, facilisis nibh vel,
          molestie nisl. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc vitae consectetur purus. Nulla ex ex, fermentum eget
          lacus ac, bibendum convallis justo. Nullam mattis diam vel nulla porta
          laoreet.
        </p>
      </div>
      <div className={styles.blog_text}>
        <h2>Заголовок</h2>
        <p>
          Suspendisse ut dignissim purus. Morbi consequat vehicula lectus non
          molestie. Nulla sapien ante, hendrerit in diam sed, commodo varius mi.
          Nam erat lorem, facilisis sit amet varius eget, faucibus sit amet
          arcu. Aenean pulvinar erat ut arcu elementum molestie. Donec pulvinar
          molestie vehicula. Donec mauris sem, fermentum nec faucibus in, porta
          vel lectus. Ut elementum tristique lectus non vulputate.
        </p>
        <p>
          Nam gravida sem eu dolor malesuada, quis varius nulla laoreet. Mauris
          consequat eros a ex scelerisque, vel mollis mauris sollicitudin. Etiam
          semper orci purus, eget ornare erat blandit a. Donec feugiat lacus in
          justo posuere gravida. Proin pretium sapien vitae odio iaculis
          blandit. Quisque nunc augue, pellentesque sit amet justo eu, elementum
          pretium orci. Aenean sit amet eros ornare, facilisis nibh vel,
          molestie nisl. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc vitae consectetur purus. Nulla ex ex, fermentum eget
          lacus ac, bibendum convallis justo. Nullam mattis diam vel nulla porta
          laoreet.
        </p>
      </div>
      <p className={styles.author}>Автор статті, 09.05.2024</p>
    </section>
  );
}
