import Perks from "./perks";

export default function Home() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="cont py-12">
          <h2 className="h2 text-center">Ciao!</h2>
          <p className="mt-4">
            Welcome to the coding part of the Richclicks interview, in this task
            we are gonna code a little react component to show awesome perks in
            working at Richclicks!
          </p>
        </div>
      </section>
      <Perks />
    </main>
  );
}
