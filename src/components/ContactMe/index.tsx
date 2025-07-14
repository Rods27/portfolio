import { useConfiguration } from '@/store/modules';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import translate from '@translate';
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { translate: translateState } = useConfiguration();

  const { contact } = translate[translateState];

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { email, message, name, subject } = formData;
    window.location.href = `mailto:rods.leite27@gmail.com?subject=${subject}&body=Hi, my name is ${name}. \n${message} and you can contact at ${email}`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">{contact.title}</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          {`${contact.subtitle} `}
          <span className="decoration-day-mode-yellow/50 underline">{contact.contact}</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center select-all">
            <PhoneIcon className="text-day-mode-yellow h-7 w-7 animate-pulse" />
            <p className="text-2xl">+551196451672</p>
          </div>
          <div className="flex items-center space-x-5 justify-center select-all">
            <EnvelopeIcon className="text-day-mode-yellow h-7 w-7 animate-pulse" />
            <p className="text-2xl">rods.leite27@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-day-mode-yellow h-7 w-7 animate-pulse" />
            <p className="text-2xl">São Bernardo do Campo - SP</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder={contact.form.name}
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder={contact.form.email}
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder={contact.form.subject}
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder={contact.form.message}
            className="contactInput"
          />
          <button className="bg-night-mode-yellow py-5 px-10 rounded-md  font-bold" type="submit">
            {contact.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
