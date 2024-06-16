import Image from "next/image";

import styles from "./Blog.module.scss";

import BlogImage from "@/../public/blog-image.png";

import Link from "next/link";

import { MoveRight } from "lucide-react";

type BlogItemProps = {
  id: number;
};

export default function BlogItem({ id }: BlogItemProps) {
  return (
    <section className={styles.item_root}>
      <Image alt="Blog" src={BlogImage} width={650} height={450} />
      <div className={styles.text_block}>
        <h2>Назва статті</h2>
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
          justo.
        </p>
        <Link href={`/blog/blog-item?id=${id}`}>
          Детальніше <MoveRight />
        </Link>
      </div>
    </section>
  );
}
