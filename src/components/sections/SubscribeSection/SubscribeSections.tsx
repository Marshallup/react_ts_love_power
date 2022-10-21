import React from "react";

const SubscribeSections = () => {
  return (
    <section className="block__subscribe">
      <div className="container">
        <div className="block__subscribe__inner">
          <div className="block__subscribe__info">
            <div className="block__subscribe__title">Never miss a drop</div>
            <div className="block__subscribe__text">Subscribe to our ultra-exclusive drop list and be the first to know about drops.</div>
            <div className="block__subscribe__form">
              <form action="#/">
                <input type="emal" placeholder="Your email address" className="block__subscribe__field" required />
                <input type="submit" value="Subscribe" className='btn__default btn_subscribe__form' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSections