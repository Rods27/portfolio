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
      max-w-7xl px-10 justify-evenly mx-auto items-center min-height"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl height-850:top-12 mobileMd:text-xl mobileMd:tracking-[15px] mobileMd:top-[65px] mobileSm:text-lg mobileSm:tracking-[10px] mobileSm:top-[85px] mobileMd:w-max">
        {contact.title}
      </h3>

      <div className="flex flex-col space-y-10 mobileMd:space-y-6 mobileSm:mt-12">
        <h4 className="text-4xl font-semibold text-center mobileMd:text-xl mobileSm:text-xl">
          {`${contact.subtitle} `}
          <span className="decoration-day-mode-yellow/50 underline">{contact.contact}</span>
        </h4>
        <div className="space-y-10 mobileMd:space-y-8 mobileSm:space-y-6">
          <div className="flex items-center space-x-5 justify-center select-all">
            <PhoneIcon className="text-day-mode-yellow h-7 w-7 animate-pulse mobileMd:h-6 mobileMd:w-6 mobileSm:h-5 mobileSm:w-5" />
            <p className="text-2xl mobileMd:text-xl mobileSm:text-lg">+551196451672</p>
          </div>
          <div className="flex items-center space-x-5 justify-center select-all">
            <EnvelopeIcon className="text-day-mode-yellow h-7 w-7 animate-pulse mobileMd:h-6 mobileMd:w-6 mobileSm:h-5 mobileSm:w-5" />
            <p className="text-2xl mobileMd:text-xl mobileSm:text-lg">rods.leite27@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-day-mode-yellow h-7 w-7 animate-pulse mobileMd:h-6 mobileMd:w-6 mobileSm:h-5 mobileSm:w-5" />
            <p className="text-2xl mobileMd:text-xl mobileSm:text-lg">São Bernardo do Campo - SP</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto mobileMd:w-full mobileSm:w-full"
        >
          <div className="flex space-x-2 mobileMd:flex-col mobileMd:space-x-0 mobileMd:space-y-2 mobileSm:flex-col mobileSm:space-x-0 mobileSm:space-y-2">
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
          <button
            className="bg-night-mode-yellow py-5 px-10 rounded-md font-bold mobileMd:py-4 mobileMd:px-8 mobileSm:py-3 mobileSm:px-6"
            type="submit"
          >
            {contact.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
