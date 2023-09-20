import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import ParagraphHeader from "../../components/ParagraphHeader";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import LazyImage from "../../components/LazyImage";
import { motion } from "framer-motion";
const { VITE_SERVICE_ID } = import.meta.env;

function ContactUs() {
  const { t } = useTranslation();
  const TITLE = t("contactUs.title");
  const CONTACT_TITLE = t("contactUs.contact.title");
  const CONTACT_SUBTITLE = t("contactUs.contact.subTitle");
  const CONTACT_BUTTON = t("contactUs.contact.button");
  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="inherit" />,
      title: t("contactUs.contact.info.location"),
    },
    {
      icon: <LocalPhoneIcon fontSize="inherit" />,
      title: t("contactUs.contact.info.phone"),
    },
    {
      icon: <MailSharpIcon fontSize="inherit" />,
      title: t("contactUs.contact.info.email"),
    },
  ];

  const form = useRef<HTMLFormElement | null>(null);

  const submitFunction = async (resetForm: () => void) => {
    if (!form.current) return;

    try {
      emailjs.sendForm(
        VITE_SERVICE_ID,
        "template_b777vi7",
        form.current,
        "dRii3LyW1kBLp__Ny",
      );
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  const { handleChange, handleBlur, values, isSubmitting, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },

      onSubmit: (_values, { resetForm }) => {
        submitFunction(resetForm);
      },
    });
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mb-10">
        <ParagraphHeader>{TITLE}</ParagraphHeader>
      </div>
      <div className="flex flex-col-reverse justify-between gap-10 rounded-2xl sm:p-10 sm:shadow-md lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mb-10 flex flex-col items-center gap-4 text-center lg:items-start">
            <h1 className="text-4xl font-semibold text-main">
              {CONTACT_TITLE}
            </h1>
            <p>{CONTACT_SUBTITLE}</p>
          </div>
          <form
            className="flex flex-col space-y-5"
            onSubmit={handleSubmit}
            ref={form}
          >
            <div className="flex gap-2  lg:flex-col lg:space-y-5">
              <input
                className="contactInput"
                type="text"
                placeholder={t("contactUs.contact.inputs.name")}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                required
              />{" "}
              <input
                className="contactInput"
                type="text"
                name="phone"
                placeholder={t("contactUs.contact.inputs.phone")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                required
              />
            </div>
            <input
              className="contactInput"
              type="email"
              name="email"
              placeholder={t("contactUs.contact.inputs.email")}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              required
            />

            <textarea
              className="contactInput h-44"
              placeholder={t("contactUs.contact.inputs.message")}
              name="message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.message}
              required
            />
            <div className="flex w-full justify-end">
              <Button
                className="flex w-full justify-center rounded-md bg-main"
                type="submit"
                disabled={isSubmitting}
              >
                {CONTACT_BUTTON}
              </Button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-10 lg:flex-col lg:items-start">
          <LazyImage
            alt="contact-image"
            src="/contact-us/main-image.svg"
            lowSrc="/contact-us/main-image-low.png"
            className="aspect-square w-64 object-contain lg:w-[25rem] xl:w-[29rem]"
          />
          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon, title }, index) => (
              <div className="flex items-center gap-2 md:gap-5" key={index}>
                <div className="flex rounded-full border-[1px] p-2 text-base text-main md:text-2xl">
                  {icon}
                </div>
                <h1 className="text-sm text-gray-700 sm:text-xl md:text-2xl">
                  {title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
