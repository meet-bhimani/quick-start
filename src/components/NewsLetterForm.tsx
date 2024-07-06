import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "react-query";
import { ClipLoader } from "react-spinners";
import Button from "./common/Button";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

const NewsletterForm = () => {
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
      const response = await fetch("http://localhost:3000/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network error occurred");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        reset();
        setTimeout(() => {
          mutation.reset();
        }, 3000);
      },
    }
  );

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className='w-full mt-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='php-email-form'>
        <div className='relative'>
          <input
            id='email'
            type='email'
            {...register("email")}
            className='w-full p-2 border outline-none focus:border-primary py-2 px-4 rounded-full'
          />
          <Button type='submit' className='bg-primary text-white h-full  rounded-full absolute top-0 right-0'>
            Subscribe
          </Button>
        </div>
        {errors.email && <p className='text-red-500 text-[13px] ml-2 mt-1'>{errors.email.message}</p>}
        {mutation.isLoading && (
          <p className='w-full text-center bg-white py-3 mb-6 flex items-center justify-center gap-2 mt-4'>
            <ClipLoader size={20} color='#388da8' /> Loading...
          </p>
        )}
        {mutation.isError && (
          <p className='w-full bg-red-800 text-white text-center py-3 mt-4'>Error: {mutation?.error?.message}</p>
        )}
        {mutation.isSuccess && (
          <p className='w-full bg-green-800 text-white text-center py-3 mt-4'>
            Your subscription request has been sent. Thank you!
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;
