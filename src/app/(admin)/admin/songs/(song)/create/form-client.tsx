"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PickImage } from "@/components/PickImage";
import { useState } from "react";
import { PickAudio } from "@/components/PickAudio";
import { createSongSchema } from "@/schemas";
import { PickVideo } from "@/components/PickVideo";

const formSchema = createSongSchema.pick({ name: true, featured: true });

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      featured: false,
    },
  });
  const [photo, setPhoto] = useState<string>("");
  const [coverPhoto, setCoverPhoto] = useState<string>("");
  const [audioSrc, setAudio] = useState<string>("");
  const [videoSrc, setVideo] = useState<string>("");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await fetch("/api/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        featured: true,
        photo,
        coverPhoto,
        audioSrc,
        videoSrc,
      }),
    }).then((res) => res.json());
    console.log(result);
    setAudio("");
    setVideo("");
    setPhoto("");
    setCoverPhoto("");
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Nombre de la canción" required {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <PickImage image={photo} setImage={setPhoto} />
        <PickImage image={coverPhoto} setImage={setCoverPhoto} />
        <PickAudio audio={audioSrc} setAudio={setAudio} />
        <PickVideo video={videoSrc} setVideo={setVideo} />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
