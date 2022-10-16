export default function Faq() {
  return (
    <>
      <h2 className="text-4xl mb-8">FAQ</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-2xl mb-2">How much is the minting price?</h3>
          <p>
            The closed sale minting price is 0.02 ETH, you can mint several tokens at once, 5 tokens per address max..
          </p>
          <p>
            The public sale minting price is 0.07 ETH, you can mint several tokens at once, no limitation. Total amount of NFT items is 1000, rarity report available <a href='/assets/rarity-report.txt' target='_blank'>here</a> as well as some <a href='/assets/gas-report.txt' target='_blank'>gas report</a>.
          </p>
          <p>
            Since <a href='https://www.erc721a.org/' target='_blank' rel="noreferrer">ERC721A</a> is used, it significantly reduces gas (you can mint multiple NFTs at essentially the same cost as minting a single NFT!). Besides that, it is designed to reduce gas as much as possible.
          </p>
        </div>
      </div>
    </>
  );
}
