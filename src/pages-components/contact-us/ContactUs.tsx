import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../components/Button';

import { IoLocationSharp } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { ImPhone } from 'react-icons/im';
import ParagraphHeader from '../../components/ParagraphHeader';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import LazyImage from '../../components/LazyImage';

const SERVICE_ID = '';

function ContactUs() {
  const { t } = useTranslation();
  const TITLE = t('contactUs.title');
  const CONTACT_TITLE = t('contactUs.contact.title');
  const CONTACT_SUBTITLE = t('contactUs.contact.subTitle');
  const CONTACT_BUTTON = t('contactUs.contact.button');
  const contactInfo = [
    {
      icon: <IoLocationSharp />,
      title: t('contactUs.contact.info.location'),
    },
    { icon: <ImPhone />, title: t('contactUs.contact.info.phone') },
    {
      icon: <IoMdMail />,
      title: t('contactUs.contact.info.email'),
    },
  ];

  const form: any = useRef();

  const submitFunction = async () => {
    try {
      emailjs.sendForm(
        SERVICE_ID,
        'template_b777vi7',
        form.current,
        'dRii3LyW1kBLp__Ny'
      );
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    resetForm,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },

    onSubmit: () => {
      submitFunction();
    },
  });
  return (
    <div>
      <div className="mb-10">
        <ParagraphHeader>{TITLE}</ParagraphHeader>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 justify-between sm:shadow-md sm:p-10 rounded-2xl">
        <div className="w-full lg:w-1/2">
          <div className="flex text-center items-center lg:items-start flex-col gap-4 mb-10">
            <h1 className="text-main font-semibold text-4xl">
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
                placeholder={t('contactUs.contact.inputs.name')}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                required
              />{' '}
              <input
                className="contactInput"
                type="text"
                name="phone"
                placeholder={t('contactUs.contact.inputs.phone')}
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
              placeholder={t('contactUs.contact.inputs.email')}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              required
            />

            <textarea
              className="contactInput h-44"
              placeholder={t('contactUs.contact.inputs.message')}
              name="message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.message}
              required
            />
            <div className="flex w-full justify-end">
              <Button
                className="w-full flex justify-center rounded-md bg-main"
                type="submit"
                disabled={isSubmitting}
              >
                {CONTACT_BUTTON}
              </Button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center lg:items-start lg:flex-col gap-4 md:gap-10">
          <div className="w-64 lg:w-[25rem] xl:w-[29rem]">
            <LazyImage
              src="/contact-us/main-image.svg"
              lowSrc="/contact-us/main-image-low.png"
              className="aspect-square object-contain"
            />
          </div>
          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon, title }, index) => (
              <div className="flex gap-2 md:gap-5 items-center" key={index}>
                <div className="border-[1px] rounded-full p-2 text-base md:text-2xl text-main">
                  {icon}
                </div>
                <h1 className="text-sm sm:text-xl md:text-2xl text-gray-700">
                  {title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
