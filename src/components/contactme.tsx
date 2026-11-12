import { useState, type FormEvent } from "react";
import { LoaderCircle, Mail, Send } from "lucide-react";

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormStatus = {
  type: "success" | "error";
  message: string;
};

export default function Contactme() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);
  const isConfigured = Boolean(emailJsServiceId && emailJsTemplateId && emailJsPublicKey);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    if (!isConfigured) {
      setStatus({
        type: "error",
        message: "Le formulaire n'est pas encore configuré. Consultez le README pour connecter EmailJS.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      from_name: String(formData.get("name") ?? ""),
      reply_to: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setIsSending(true);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        console.error("EmailJS rejected the contact message:", details);
        setStatus({
          type: "error",
          message: "L'envoi a échoué. Vérifiez la configuration du service puis réessayez.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Votre message a bien été envoyé. Merci de m'avoir contacté !",
      });
    } catch (error) {
      console.error("Could not send the contact message:", error);
      setStatus({
        type: "error",
        message: "Une erreur réseau a empêché l'envoi. Vérifiez votre connexion puis réessayez.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contactme" className="my-20 scroll-mt-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
          Contactez-<span className="text-primary">moi</span>
        </h2>
        <p className="mb-8 text-center">
          Une question ou une opportunité de stage ? Envoyez-moi un message.
        </p>

        <form onSubmit={handleSubmit} className="card bg-base-200 p-6 shadow-xl md:p-8">
          <label className="form-control mb-4 w-full">
            <span className="label-text mb-2 font-medium">Nom</span>
            <input
              className="input input-bordered w-full"
              type="text"
              name="name"
              autoComplete="name"
              maxLength={100}
              placeholder="Votre nom"
              required
            />
          </label>

          <label className="form-control mb-4 w-full">
            <span className="label-text mb-2 font-medium">Adresse e-mail</span>
            <input
              className="input input-bordered w-full"
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
              placeholder="vous@exemple.com"
              required
            />
          </label>

          <label className="form-control mb-4 w-full">
            <span className="label-text mb-2 font-medium">Objet</span>
            <input
              className="input input-bordered w-full"
              type="text"
              name="subject"
              maxLength={150}
              placeholder="Objet de votre message"
              required
            />
          </label>

          <label className="form-control mb-6 w-full">
            <span className="label-text mb-2 font-medium">Message</span>
            <textarea
              className="textarea textarea-bordered min-h-36 w-full"
              name="message"
              maxLength={5000}
              placeholder="Votre message..."
              required
            />
          </label>

          {status && (
            <p
              className={`mb-4 text-sm ${status.type === "success" ? "text-success" : "text-error"}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}

          <button
            className="btn btn-primary w-full md:w-fit"
            type="submit"
            disabled={isSending || !isConfigured}
            title={!isConfigured ? "Configurez EmailJS pour activer l'envoi." : undefined}
          >
            {isSending ? (
              <>
                <LoaderCircle className="h-5 w-5 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Mail className="h-5 w-5" />
                Envoyer le message
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
