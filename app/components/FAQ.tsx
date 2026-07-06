import { siteConfig } from "../data/site-config";

export function FAQ() {
  const { faqs } = siteConfig;

  return (
    <section id="faq" className="section">
      <div className="container-narrow">
        <div className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-body">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
