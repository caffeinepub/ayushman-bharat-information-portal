import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { CheckCircle, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";

const faqsEn = [
  {
    id: "eligibility",
    q: "Who is eligible for PM-JAY?",
    a: "Families listed in the Socio-Economic Caste Census (SECC) 2011 database are eligible. This primarily covers rural and urban poor families. Check eligibility at pmjay.gov.in or call 14555.",
  },
  {
    id: "ayushman-card",
    q: "How do I get my Ayushman Card?",
    a: "Visit your nearest Common Service Centre (CSC) or an empanelled hospital with your Aadhaar card, ration card, and family ID. You can also use the Ayushman App on Google Play Store.",
  },
  {
    id: "diseases-covered",
    q: "Which diseases and procedures are covered?",
    a: "PM-JAY covers over 1,949 medical procedures including cancer treatment, cardiac surgery, kidney transplants, neurosurgery, orthopaedics, and many more — up to ₹5 lakh per family per year.",
  },
  {
    id: "private-hospitals",
    q: "Can I use the Ayushman Card at private hospitals?",
    a: "Yes! Any government or private hospital empanelled under PM-JAY accepts the Ayushman Card. There are over 27,000 empanelled hospitals across India.",
  },
  {
    id: "name-not-found",
    q: "What if my name is not in the beneficiary list?",
    a: "Visit pmjay.gov.in or call 14555 to check. If missing despite being eligible, contact your nearest Ayushman Mitra at any empanelled hospital or visit your local District Health Office.",
  },
];

const faqsHi = [
  {
    id: "eligibility",
    q: "पीएम-जेएवाई के लिए कौन पात्र है?",
    a: "एसईसीसी 2011 डेटाबेस में सूचीबद्ध परिवार पात्र हैं। मुख्यरूप से ग्रामीण और शहरी गरीब परिवार शामिल हैं। pmjay.gov.in पर या 14555 पर कॉल करके पात्रता जांचें।",
  },
  {
    id: "ayushman-card",
    q: "आयुष्मान कार्ड कैसे प्राप्त करें?",
    a: "अपने आधार, राशन कार्ड और परिवार आईडी लेकर नजदीकी सीएससी या सूचीबद्ध अस्पताल जाएं। आप गूगल प्ले स्टोर से आयुष्मान एप भी उपयोग कर सकते हैं।",
  },
  {
    id: "diseases-covered",
    q: "कौन सी बीमारियां और प्रक्रियाएं कवर हैं?",
    a: "पीएम-जेएवाई 1,949 से अधिक चिकित्सा प्रक्रियाओं को कवर करता है, जिसमें कैंसर, हृदय सर्जरी, गुर्दे प्रत्यारोपण, न्यूरोसर्जरी आदि शामिल हैं — प्रति वर्ष प्रति परिवार ₹5 लाख तक।",
  },
  {
    id: "private-hospitals",
    q: "क्या निजी अस्पतालों में आयुष्मान कार्ड उपयोग कर सकते हैं?",
    a: "हां! पीएम-जेएवाई के तहत कोई भी सूचीबद्ध सरकारी या निजी अस्पताल आयुष्मान कार्ड स्वीकार करता है। पूरे भारत में 27,000 से अधिक सूचीबद्ध अस्पताल हैं।",
  },
  {
    id: "name-not-found",
    q: "अगर मेरा नाम लाभार्थी सूची में नहीं है तो?",
    a: "pmjay.gov.in पर जाएं या 14555 पर कॉल करें। यदि पात्र होने के बावजूद नाम नहीं है, तो नजदीकी सूचीबद्ध अस्पताल में आयुष्मान मित्र से मिलें या जिला स्वास्थ्य कार्यालय जाएं।",
  },
];

interface FormState {
  name: string;
  contact: string;
  question: string;
}
interface FormErrors {
  name?: string;
  contact?: string;
  question?: string;
}

export default function AskADoubt() {
  const { lang } = useLanguage();
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    question: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const faqs = lang === "hi" ? faqsHi : faqsEn;

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim())
      newErrors.name =
        lang === "hi"
          ? "कृपया अपना नाम दर्ज करें।"
          : "Please enter your full name.";
    if (!form.contact.trim())
      newErrors.contact =
        lang === "hi"
          ? "कृपया फोन या ईमेल दर्ज करें।"
          : "Please enter your phone number or email.";
    if (!form.question.trim())
      newErrors.question =
        lang === "hi"
          ? "कृपया अपना प्रश्न लिखें।"
          : "Please describe your question.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: "", contact: "", question: "" });
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section className="section-blue py-16 md:py-20" data-ocid="doubt.section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-saffron/15 px-4 py-1.5 text-sm font-semibold text-saffron">
            {lang === "hi" ? "हम मदद के लिए हैं" : "We're Here to Help"}
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "doubt.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "doubt.subtitle")}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-saffron/12 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/20">
                <MessageCircleQuestion className="h-5 w-5 text-saffron" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t(lang, "doubt.title")}
              </h3>
            </div>

            {submitted ? (
              <div
                className="flex flex-col items-center gap-4 py-10 text-center"
                data-ocid="doubt.success_state"
              >
                <CheckCircle className="h-16 w-16 text-govt-green" />
                <h3 className="text-xl font-bold text-foreground">
                  {lang === "hi" ? "धन्यवाद!" : "Thank you!"}
                </h3>
                <p className="text-muted-foreground">
                  {t(lang, "doubt.successMsg")}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-sm font-medium text-saffron underline"
                >
                  {lang === "hi" ? "एक और प्रश्न पूछें" : "Ask another question"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="doubt-name"
                    className="font-medium text-foreground"
                  >
                    {t(lang, "doubt.name")}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="doubt-name"
                    placeholder={t(lang, "doubt.namePlaceholder")}
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className={errors.name ? "border-destructive" : ""}
                    data-ocid="doubt.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="doubt.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="doubt-contact"
                    className="font-medium text-foreground"
                  >
                    {t(lang, "doubt.contact")}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="doubt-contact"
                    placeholder={t(lang, "doubt.contactPlaceholder")}
                    value={form.contact}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, contact: e.target.value }))
                    }
                    className={errors.contact ? "border-destructive" : ""}
                    data-ocid="doubt.input"
                  />
                  {errors.contact && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="doubt.error_state"
                    >
                      {errors.contact}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="doubt-question"
                    className="font-medium text-foreground"
                  >
                    {t(lang, "doubt.question")}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="doubt-question"
                    placeholder={t(lang, "doubt.questionPlaceholder")}
                    rows={4}
                    value={form.question}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, question: e.target.value }))
                    }
                    className={errors.question ? "border-destructive" : ""}
                    data-ocid="doubt.textarea"
                  />
                  {errors.question && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="doubt.error_state"
                    >
                      {errors.question}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-saffron font-semibold text-white hover:bg-saffron/90"
                  data-ocid="doubt.submit_button"
                >
                  {t(lang, "doubt.submit")}
                </Button>
              </form>
            )}
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-govt-green/20">
                <HelpCircle className="h-5 w-5 text-govt-green" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t(lang, "doubt.faqTitle")}
              </h3>
            </div>
            <Accordion
              type="single"
              collapsible
              className="space-y-2"
              data-ocid="doubt.panel"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-xl border border-border/60 bg-govt-green/10 px-4"
                  data-ocid={`doubt.item.${index + 1}`}
                >
                  <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6 rounded-xl border border-saffron/30 bg-saffron/10 p-4">
              <p className="text-sm font-semibold text-saffron">
                {lang === "hi" ? "अभी भी मदद चाहिए?" : "Still need help?"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {lang === "hi"
                  ? "पीएम-जेएवाई हेल्पलाइन पर कॉल करें:"
                  : "Call PM-JAY helpline:"}{" "}
                <strong className="text-foreground">14555</strong>{" "}
                {lang === "hi" ? "या" : "or"}{" "}
                <strong className="text-foreground">1800-111-565</strong> (
                {lang === "hi" ? "टोल-फ्री, 24/7" : "Toll-Free, 24/7"})
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
