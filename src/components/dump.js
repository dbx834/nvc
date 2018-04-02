<H1 mask="h4">Date & Time</H1>
            <Paragraph>
              {humanDate}
              <br />
              <i>
                {fromTime} – {toTime}
              </i>
            </Paragraph>
            <Price frontmatter={frontmatter} />

            <H1 mask="h4">Register</H1>
            <Paragraph style={{ marginBottom: 30 }}>
              Thank you for your interest in this upcoming
              workshop/training/practice group!
              <br />
              <br />
              Please fill out the below details, and we will respond shortly
              with additional details (availability, price, venue, etc).
            </Paragraph>
            <div id="register-form">
              <Register event={{ key: humanDate }} />
            </div>
            <H1 mask="h4">Pay Now</H1>
            <Paragraph>
              Please make your payment to confirm your seat. Select the Domestic
              option for Indian bank/credit cards, or the International option
              for foreign bank/credit cards.
            </Paragraph>
            <H2 mask="h5">Domestic Transfer (₹)</H2>
            <Paragraph>
              <OutLink to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD">
                <Image
                  src={donateButton}
                  rawWidth={135}
                  rawHeight={48}
                  style={{
                    height: "auto",
                    width: "150px",
                    border: 0,
                    background: "transparent",
                    display: "inline-block",
                  }}
                  loader="gradient"
                />
              </OutLink>
            </Paragraph>
            <H2 mask="h5">International Transfer ($)</H2>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFXM5RNDGBXL4"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>





            <H2 mask="h5">Domestic Transfer (₹)</H2>
            <Paragraph>
              <OutLink to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD">
                <Image
                  src={donateButton}
                  rawWidth={135}
                  rawHeight={48}
                  style={{
                    height: "auto",
                    width: "150px",
                    border: 0,
                    background: "transparent",
                    display: "inline-block",
                  }}
                  loader="gradient"
                />
              </OutLink>
            </Paragraph>
            <H2 mask="h5">International Transfer ($)</H2>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFXM5RNDGBXL4"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>