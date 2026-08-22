import type { Metadata } from "next";
import FundraiserForm from "@/components/FundraiserForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fundraisers",
  description:
    "Host a pizza fundraiser with Tony's Pizzaria in Ventura, CA. A percentage of every purchase is donated back to your school or non-profit organization.",
  alternates: { canonical: "/fundraisers" },
};

export default function FundraisersPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h1 className="font-display text-4xl text-yellow neon-text sm:text-5xl">Fundraisers!</h1>
          <p className="mt-4 text-cream/85">
            Tony&rsquo;s Pizzaria, Surfers Point Ventura Beach, and the Barrios family have been
            supporting local schools and non-profits for over 60 years. Tony&rsquo;s cares about
            the Ventura community &mdash; and Tony&rsquo;s Pizzaria is the perfect place for a
            fundraiser!
          </p>
        </div>
        <div className="bg-diner-lights h-1.5 w-full" />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-lg leading-relaxed text-foreground/80">
            Small and quaint, this timeless landmark continues to be a local favorite specializing
            in New York style hand tossed pizza. Our dough and sauce is made from scratch daily.
            We only use the best local ingredients, our fresh mozzarella is of premium quality,
            and we blend just the right amount of spices to create our signature homemade
            sausage.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            The pizzas pretty much sell themselves &mdash; and with every purchase made, a
            percentage is donated back to your organization!
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Call Tony&rsquo;s now for more information at{" "}
            <a href={`tel:${BUSINESS.phone}`} className="font-bold text-teal-dark hover:underline">
              {BUSINESS.phoneDisplay}
            </a>{" "}
            or use the form below to get started.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-ink">Ready to start your fundraiser?</h2>
          <p className="mt-2 text-sm text-foreground/60">All fields marked are required.</p>
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <FundraiserForm />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-foreground/50">
            Please note Tony&rsquo;s Pizzaria will not support organizations that discriminate
            against a person or a group on the basis of age, political affiliation, race,
            national origin, ethnicity, gender, disability, sexual orientation or religious
            belief. Additionally, we do not host fundraising events as part of campaign activity
            for or against political candidates or action organizations that attempt to influence
            legislation.
          </p>
        </div>
      </section>
    </>
  );
}
