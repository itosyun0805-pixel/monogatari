'use client'

import styles from './tsurushi.module.css'

const SHOPIFY_CHECKOUT_URL = 'https://monostories-japan.myshopify.com/cart/47751296450731:1?country=DE&locale=en'

export default function TsurushiPurchase() {
  return (
    <>
      <section className={styles.purchase} id="kit" aria-labelledby="purchase-title">
        <div className={styles.purchaseIntro}>
          <p className={styles.sectionLabel}>Make the first three · 最初の三つ</p>
          <h2 id="purchase-title">Start with one evening.</h2>
          <p>The cloth will be different from the draft image. That difference begins with the kimono we find.</p>
        </div>

        <div className={styles.purchaseForm}>
          <div className={styles.productLine}>
            <span>
              <strong>Tsurushi-bina Kit</strong>
              <small>Kimono cloth and materials for three ornaments</small>
            </span>
            <b>€50</b>
          </div>

          <a className={styles.cartButton} href={SHOPIFY_CHECKOUT_URL}>
            Continue to secure checkout · €50
          </a>

          <p className={styles.shipping}>Ships from Japan · Usually dispatches within 30 days</p>
          <p className={styles.deadline}>If demand is higher than expected, dispatch may take longer. We will email you before shipping if the timing changes.</p>
          <p className={styles.taxNote}>Shipping, import duties, and taxes are calculated according to your destination at checkout.</p>
        </div>
      </section>

      <aside className={styles.stickyPurchase} aria-label="Buy the Tsurushi-bina Kit">
        <span className={styles.stickyProduct}>
          <strong>Tsurushi-bina Kit</strong>
          <small>Three ornaments · Ships within 30 days</small>
        </span>
        <span className={styles.stickyPrice}>€50</span>
        <a href={SHOPIFY_CHECKOUT_URL}>Buy the kit</a>
      </aside>
    </>
  )
}
