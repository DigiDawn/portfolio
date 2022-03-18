import { content } from "../lib/content";

const Footer = () => {
  return (
    <footer className="bg-[color:var(--surface-strong)] px-8 py-10 text-[color:var(--text)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold">Dominique Daniels</p>
          <p className="max-w-md text-sm text-[color:var(--muted)]">
            {content.footer.tagline}
          </p>
        </div>

        <div className="text-sm text-[color:var(--muted)]">
          {content.contact.contactItems.map((item) => (
            <p key={item.label}>{item.value}</p>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-[color:var(--border)] pt-6 text-center text-sm text-[color:var(--muted)]">
        {content.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
