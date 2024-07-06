import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./common/Button";
import { useMutation } from "react-query";
import TextInput from "./common/TextInput";
import { ClipLoader } from "react-spinners";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation<unknown, { message: string }, FormData>(
    async (data: FormData) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      reset();
      return response.json();
    },
    {
      onSuccess: () => {
        setTimeout(() => {
          mutation.reset();
        }, 3000);
      },
    }
  );

  const onSubmit = async (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className='w-full shadow-contact p-8 min-h-[400px]'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col md:flex-row gap-0 md:gap-6'>
          <TextInput
            id='name'
            className='basis-1/2 w-full'
            placeholder='Your Name'
            type='text'
            register={register("name")}
            error={errors.name}
          />
          <TextInput
            className='basis-1/2 w-full'
            id='email'
            placeholder='Your Email'
            type='text'
            register={register("email")}
            error={errors.email}
          />
        </div>
        <TextInput
          id='subject'
          placeholder='Subject'
          type='text'
          register={register("subject")}
          error={errors.subject}
        />
        <TextInput
          id='message'
          placeholder='Message'
          type='textarea'
          register={register("message")}
          error={errors.message}
          rows={5}
        />
        <div className='flex flex-col items-center justify-center'>
          {mutation.isLoading && (
            <p className='w-full text-center py-3 mb-6 flex items-center justify-center gap-2'>
              <ClipLoader size={20} color='#388da8' /> Loading...
            </p>
          )}
          {mutation.isError && (
            <p className='w-full bg-red-800 text-white text-center py-3 mb-6'>Error: {mutation?.error?.message}</p>
          )}
          {mutation.isSuccess && (
            <p className='w-full bg-green-800 text-white text-center py-3 mb-6'>Message sent successfully!</p>
          )}
          <Button type='submit' className='rounded-full mx-auto'>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
