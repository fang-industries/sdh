import Disclaimer from "../modules/Disclaimer";
import Termination from "../modules/Termination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCheck,
  faDatabase,
  faDoorOpen,
  faHandPeace,
  faInfoCircle,
  faSatellite,
  faSatelliteDish,
  faThumbsUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function (props) {
  return (
    <div className="space-y-8">
      <div className="flex">
        <div>
          <div className="flex flex-row">
            <p className="text-xl font-medium text-sky-500">
              {props.name} is licensed under the
            </p>
          </div>
          <p className="text-4xl font-bold">
            CC BY 4.0 License{" "}
            <span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">
              Copyright © {props.copyright}
            </span>
          </p>
          <div className="mt-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              Permits almost any use subject to providing credit and license
              notice. Frequently used for media assets and educational
              materials. The most common license for Open Access scientific
              publications. Not recommended for software.
            </p>
          </div>
        </div>
        <div className="flex space-x-8 pl-4">
          <div>
            <p className="font-semibold">Permissions</p>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Commercial Use</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Modifications</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Distribution</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="my-auto text-green-500"
                />
                <p>Private Use</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Limitations</p>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="my-auto text-red-500"
                />
                <p>Liability</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="my-auto text-red-500"
                />
                <p>Warranty</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Conditions</p>
            <div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="my-auto text-blue-500"
                />
                <p>Attribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-b border-neutral-400 dark:border-neutral-600" />
      <div className="space-y-8">
        <p>
          By exercising the Licensed Rights (defined below), You accept and
          agree to be bound by the terms and conditions of this Creative Commons
          Attribution 4.0 International Public License ("Public License"). To
          the extent this Public License may be interpreted as a contract, You
          are granted the Licensed Rights in consideration of Your acceptance of
          these terms and conditions, and the Licensor grants You such rights in
          consideration of benefits the Licensor receives from making the
          Licensed Material available under these terms and conditions.
        </p>
        <div className="space-y-4" id="s1">
          <div className="flex space-x-2">
            <FontAwesomeIcon icon={faBookOpen} className="my-auto text-xl" />{" "}
            <p className="my-auto text-xl font-semibold">Definitions</p>
          </div>
          <ol className="my-2 ml-4 list-[lower-alpha] space-y-2">
            <li id="s1a">
              <span className="font-semibold text-yellow-500">
                Adapted Material
              </span>{" "}
              means material subject to Copyright and Similar Rights that is
              derived from or based upon the Licensed Material and in which the
              Licensed Material is translated, altered, arranged, transformed,
              or otherwise modified in a manner requiring permission under the
              Copyright and Similar Rights held by the Licensor. For purposes of
              this Public License, where the Licensed Material is a musical
              work, performance, or sound recording, Adapted Material is always
              produced where the Licensed Material is synched in timed relation
              with a moving image.
            </li>
            <li id="s1b">
              <span className="font-semibold text-yellow-500">
                Adapter's License
              </span>{" "}
              means the license You apply to Your Copyright and Similar Rights
              in Your contributions to Adapted Material in accordance with the
              terms and conditions of this Public License.
            </li>
            <li id="s1c">
              <span className="font-semibold text-yellow-500">
                Copyright and Similar Rights
              </span>{" "}
              means copyright and/or similar rights closely related to copyright
              including, without limitation, performance, broadcast, sound
              recording, and Sui Generis Database Rights, without regard to how
              the rights are labeled or categorized. For purposes of this Public
              License, the rights specified in{" "}
              <a
                href="#s2b"
                className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
              >
                Section 2(b)(1)-(2)
              </a>{" "}
              are not Copyright and Similar Rights.
            </li>
            <li id="s1d">
              <span className="font-semibold text-yellow-500">
                Effective Technological Measures
              </span>{" "}
              means those measures that, in the absence of proper authority, may
              not be circumvented under laws fulfilling obligations under
              Article 11 of the WIPO Copyright Treaty adopted on December 20,
              1996, and/or similar international agreements.
            </li>
            <li id="s1e">
              <span className="font-semibold text-yellow-500">
                Exceptions and Limitations
              </span>{" "}
              means fair use, fair dealing, and/or any other exception or
              limitation to Copyright and Similar Rights that applies to Your
              use of the Licensed Material.
            </li>
            <li id="s1f">
              <span className="font-semibold text-yellow-500">
                Licensed Material
              </span>{" "}
              means the artistic or literary work, database, or other material
              to which the Licensor applied this Public License.
            </li>
            <li id="s1g">
              <span className="font-semibold text-yellow-500">
                Licensed Rights
              </span>{" "}
              means the rights granted to You subject to the terms and
              conditions of this Public License, which are limited to all
              Copyright and Similar Rights that apply to Your use of the
              Licensed Material and that the Licensor has authority to license.
            </li>
            <li id="s1h">
              <span className="font-semibold text-yellow-500">Licensor</span>{" "}
              means the individual(s) or entity(ies) granting rights under this
              Public License.
            </li>
            <li id="s1i">
              <span className="font-semibold text-yellow-500">Share</span> means
              to provide material to the public by any means or process that
              requires permission under the Licensed Rights, such as
              reproduction, public display, public performance, distribution,
              dissemination, communication, or importation, and to make material
              available to the public including in ways that members of the
              public may access the material from a place and at a time
              individually chosen by them.
            </li>
            <li id="s1j">
              <span className="font-semibold text-yellow-500">
                Sui Generis Database Rights
              </span>{" "}
              means rights other than copyright resulting from Directive 96/9/EC
              of the European Parliament and of the Council of 11 March 1996 on
              the legal protection of databases, as amended and/or succeeded, as
              well as other essentially equivalent rights anywhere in the world.
            </li>
            <li id="s1k">
              <span className="font-semibold text-yellow-500">You</span> means
              the individual or entity exercising the Licensed Rights under this
              Public License.{" "}
              <span className="font-semibold text-yellow-500">Your</span> has a
              corresponding meaning.
            </li>
          </ol>
        </div>
        <div className="space-y-4" id="s2">
          <div className="flex space-x-2">
            <FontAwesomeIcon
              icon={faSatelliteDish}
              className="my-auto text-xl"
            />{" "}
            <p className="my-auto text-xl font-semibold">Scope</p>
          </div>
          <ol className="my-2 ml-4 list-[lower-alpha] space-y-2">
            <li id="s2a">
              <span className="font-semibold text-yellow-500">
                License grant.
              </span>{" "}
              <ol className="my-2 ml-4 list-decimal space-y-2">
                <li id="s2a1">
                  Subject to the terms and conditions of this Public License,
                  the Licensor hereby grants You a worldwide, royalty-free,
                  non-sublicensable, non-exclusive, irrevocable license to
                  exercise the Licensed Rights in the Licensed Material to:
                  <ol
                    className="my-2
                   ml-8 list-[upper-alpha] space-y-2"
                  >
                    <li>
                      reproduce and Share the Licensed Material, in whole or in
                      part; and
                    </li>
                    <li>produce, reproduce, and Share Adapted Material.</li>
                  </ol>
                </li>
                <li id="s2a2">
                  <span className="underline">Exceptions and Limitations</span>.
                  For the avoidance of doubt, where Exceptions and Limitations
                  apply to Your use, this Public License does not apply, and You
                  do not need to comply with its terms and conditions.
                </li>
                <li id="s2a3">
                  <span className="underline">Term</span>. The term of this
                  Public License is specified in{" "}
                  <a
                    href="#s6a"
                    className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
                  >
                    Section 6(a)
                  </a>
                  .
                </li>
                <li id="s2a4">
                  <span className="underline">
                    Media and formats; technical modifications allowed
                  </span>
                  . The Licensor authorizes You to exercise the Licensed Rights
                  in all media and formats whether now known or hereafter
                  created, and to make technical modifications necessary to do
                  so. The Licensor waives and/or agrees not to assert any right
                  or authority to forbid You from making technical modifications
                  necessary to exercise the Licensed Rights, including technical
                  modifications necessary to circumvent Effective Technological
                  Measures. For purposes of this Public License, simply making
                  modifications authorized by this{" "}
                  <a
                    href="#s6a"
                    className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
                  >
                    Section 2(a)(4)
                  </a>{" "}
                  never produces Adapted Material.
                </li>
                <li id="s2a5">
                  <span className="underline">Downstream recipients</span>.
                  <ol className="my-2 ml-8 list-[upper-alpha] space-y-2">
                    <li id="s2a5A">
                      <span className="underline">
                        Offer from the Licensor – Licensed Material
                      </span>
                      . Every recipient of the Licensed Material automatically
                      receives an offer from the Licensor to exercise the
                      Licensed Rights under the terms and conditions of this
                      Public License.
                    </li>
                    <li id="s2a5B">
                      <span className="underline">
                        No downstream restrictions
                      </span>
                      . You may not offer or impose any additional or different
                      terms or conditions on, or apply any Effective
                      Technological Measures to, the Licensed Material if doing
                      so restricts exercise of the Licensed Rights by any
                      recipient of the Licensed Material.
                    </li>
                  </ol>
                </li>
                <li id="s2a6">
                  <span className="underline">No endorsement</span>. Nothing in
                  this Public License constitutes or may be construed as
                  permission to assert or imply that You are, or that Your use
                  of the Licensed Material is, connected with, or sponsored,
                  endorsed, or granted official status by, the Licensor or
                  others designated to receive attribution as provided in{" "}
                  <a
                    href="#s3a1Ai"
                    className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
                  >
                    Section 3(a)(1)(A)(i)
                  </a>
                  .
                </li>
              </ol>
            </li>
            <li id="s2b">
              <span className="font-semibold text-yellow-500">
                Other rights.
              </span>{" "}
              <ol className="my-2 ml-4 list-decimal space-y-2">
                <li id="s2b1">
                  Moral rights, such as the right of integrity, are not licensed
                  under this Public License, nor are publicity, privacy, and/or
                  other similar personality rights; however, to the extent
                  possible, the Licensor waives and/or agrees not to assert any
                  such rights held by the Licensor to the limited extent
                  necessary to allow You to exercise the Licensed Rights, but
                  not otherwise.
                </li>
                <li id="s2b2">
                  Patent and trademark rights are not licensed under this Public
                  License.
                </li>
                <li id="s2b3">
                  To the extent possible, the Licensor waives any right to
                  collect royalties from You for the exercise of the Licensed
                  Rights, whether directly or through a collecting society under
                  any voluntary or waivable statutory or compulsory licensing
                  scheme. In all other cases the Licensor expressly reserves any
                  right to collect such royalties.
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="space-y-4" id="s3">
          <div className="flex space-x-2">
            <FontAwesomeIcon icon={faThumbsUp} className="my-auto text-xl" />{" "}
            <p className="my-auto text-xl font-semibold">License Conditions</p>
          </div>
          <p>
            Your exercise of the Licensed Rights is expressly made subject to
            the following conditions.
            <ol className="my-2 ml-4 list-[lower-alpha] space-y-2">
              <li id="s3a">
                <span className="font-semibold text-yellow-500">
                  Attribution.
                </span>
                <ol className="my-2 ml-8 list-decimal space-y-2">
                  <li id="s3a1">
                    If You Share the Licensed Material (including in modified
                    form), You must:
                    <ol className="my-2 ml-12 list-[upper-alpha] space-y-2">
                      <li id="s3a1A">
                        retain the following if it is supplied by the Licensor
                        with the Licensed Material:
                        <ol className="my-2 ml-16 list-[lower-roman] space-y-2">
                          <li id="s3a1Ai">
                            identification of the creator(s) of the Licensed
                            Material and any others designated to receive
                            attribution, in any reasonable manner requested by
                            the Licensor (including by pseudonym if designated);
                          </li>
                          <li id="s3a1Aii">a copyright notice;</li>
                          <li id="s3a1Aiii">
                            a notice that refers to this Public License;
                          </li>
                          <li id="s3a1Aiv">
                            a notice that refers to the disclaimer of
                            warranties;
                          </li>
                          <li id="s3a1Av">
                            a URI or hyperlink to the Licensed Material to the
                            extent reasonably practicable;
                          </li>
                        </ol>
                      </li>
                      <li id="s3a1B">
                        indicate if You modified the Licensed Material and
                        retain an indication of any previous modifications; and
                      </li>
                      <li id="s3a1C">
                        indicate the Licensed Material is licensed under this
                        Public License, and include the text of, or the URI or
                        hyperlink to, this Public License.
                      </li>
                    </ol>
                  </li>
                  <li id="s3a2">
                    You may satisfy the conditions in{" "}
                    <a
                      href="#s3a1"
                      className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
                    >
                      Section 3(a)(1)
                    </a>{" "}
                    in any reasonable manner based on the medium, means, and
                    context in which You Share the Licensed Material. For
                    example, it may be reasonable to satisfy the conditions by
                    providing a URI or hyperlink to a resource that includes the
                    required information.
                  </li>
                  <li id="s3a3">
                    If requested by the Licensor, You must remove any of the
                    information required by{" "}
                    <a
                      href="#s3a1A"
                      className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
                    >
                      Section 3(a)(1)(A)
                    </a>{" "}
                    to the extent reasonably practicable.
                  </li>
                  <li id="s3a4">
                    If You Share Adapted Material You produce, the Adapter's
                    License You apply must not prevent recipients of the Adapted
                    Material from complying with this Public License.
                  </li>
                </ol>
              </li>
            </ol>
          </p>
        </div>
        <div className="space-y-4" id="s4">
          <div className="flex space-x-2">
            <FontAwesomeIcon icon={faDatabase} className="my-auto text-xl" />{" "}
            <p className="my-auto text-xl font-semibold">
              Sui Generis Database Rights
            </p>
          </div>
          <p>
            Where the Licensed Rights include Sui Generis Database Rights that
            apply to Your use of the Licensed Material:
            <ol className="my-2 ml-4 list-[lower-alpha] space-y-2">
              <li id="s4a">
                for the avoidance of doubt,{" "}
                <a
                  href="#s2a1"
                  className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
                >
                  Section 2(a)(1)
                </a>{" "}
                grants You the right to extract, reuse, reproduce, and Share all
                or a substantial portion of the contents of the database;
              </li>
              <li id="s4b">
                if You include all or a substantial portion of the database
                contents in a database in which You have Sui Generis Database
                Rights, then the database in which You have Sui Generis Database
                Rights (but not its individual contents) is Adapted Material;
                and
              </li>
              <li id="s4c">
                You must comply with the conditions in{" "}
                <a
                  href="#s3a"
                  className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
                >
                  Section 3(a)
                </a>{" "}
                if You Share all or a substantial portion of the contents of the
                database.
              </li>
            </ol>
            For the avoidance of doubt, this{" "}
            <a
              href="#s4"
              className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
            >
              Section 4
            </a>{" "}
            supplements and does not replace Your obligations under this Public
            License where the Licensed Rights include other Copyright and
            Similar Rights.
          </p>
        </div>
        <Disclaimer id="s5">
          <ol className="ml-4 list-[lower-alpha]">
            <li className="font-semibold" id="s5a">
              Unless otherwise separately undertaken by the Licensor, to the
              extent possible, the Licensor offers the Licensed Material as-is
              and as-available, and makes no representations or warranties of
              any kind concerning the Licensed Material, whether express,
              implied, statutory, or other. This includes, without limitation,
              warranties of title, merchantability, fitness for a particular
              purpose, non-infringement, absence of latent or other defects,
              accuracy, or the presence or absence of errors, whether or not
              known or discoverable. Where disclaimers of warranties are not
              allowed in full or in part, this disclaimer may not apply to You.
            </li>
            <li className="font-semibold" id="s5b">
              To the extent possible, in no event will the Licensor be liable to
              You on any legal theory (including, without limitation,
              negligence) or otherwise for any direct, special, indirect,
              incidental, consequential, punitive, exemplary, or other losses,
              costs, expenses, or damages arising out of this Public License or
              use of the Licensed Material, even if the Licensor has been
              advised of the possibility of such losses, costs, expenses, or
              damages. Where a limitation of liability is not allowed in full or
              in part, this limitation may not apply to You.
            </li>
            <li id="s5c">
              The disclaimer of warranties and limitation of liability provided
              above shall be interpreted in a manner that, to the extent
              possible, most closely approximates an absolute disclaimer and
              waiver of all liability.
            </li>
          </ol>
        </Disclaimer>
        <Termination id="s6">
          <ol className="ml-4 list-[lower-alpha]">
            <li id="s6a">
              This Public License applies for the term of the Copyright and
              Similar Rights licensed here. However, if You fail to comply with
              this Public License, then Your rights under this Public License
              terminate automatically.
            </li>
            <li id="s6b">
              Where Your right to use the Licensed Material has terminated under
              Section 6(a), it reinstates:
              <ol className="ml-8 list-decimal">
                <li id="s6b1">
                  automatically as of the date the violation is cured, provided
                  it is cured within 30 days of Your discovery of the violation;
                  or
                </li>
                <li id="s6b2">upon express reinstatement by the Licensor.</li>
              </ol>
              For the avoidance of doubt, this{" "}
              <a
                href="#s6b"
                className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
              >
                Section 6(b)
              </a>{" "}
              does not affect any right the Licensor may have to seek remedies
              for Your violations of this Public License.
            </li>
            <li id="s6c">
              For the avoidance of doubt, the Licensor may also offer the
              Licensed Material under separate terms or conditions or stop
              distributing the Licensed Material at any time; however, doing so
              will not terminate this Public License.
            </li>
            <li id="s6d">
              <a
                href="#s1"
                className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
              >
                Section 1
              </a>
              ,{" "}
              <a
                href="#s5"
                className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
              >
                Section 5
              </a>
              ,{" "}
              <a
                href="#s6"
                className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
              >
                Section 6
              </a>
              ,{" "}
              <a
                href="#s7"
                className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
              >
                Section 7
              </a>
              , and{" "}
              <a
                href="#s8"
                className="text-sky-600 underline hover:decoration-yellow-500 hover:decoration-2 dark:text-sky-300"
              >
                Section 8
              </a>{" "}
              survive termination of this Public License.
            </li>
          </ol>
        </Termination>
        <div className="space-y-4" id="s7">
          <div className="flex space-x-2">
            <FontAwesomeIcon icon={faInfoCircle} className="my-auto text-xl" />{" "}
            <p className="my-auto text-xl font-semibold">
              Other Terms and Conditions
            </p>
          </div>
          <ol className="my-2 ml-4 list-[lower-alpha] space-y-2">
            <li id="s7a">
              The Licensor shall not be bound by any additional or different
              terms or conditions communicated by You unless expressly agreed.
            </li>
            <li id="s7b">
              Any arrangements, understandings, or agreements regarding the
              Licensed Material not stated herein are separate from and
              independent of the terms and conditions of this Public License.
            </li>
          </ol>
        </div>
        <div className="space-y-4" id="s8">
          <div className="flex space-x-2">
            <FontAwesomeIcon icon={faHandPeace} className="my-auto text-xl" />{" "}
            <p className="my-auto text-xl font-semibold">Interpretation</p>
          </div>
          <ol className="my-2 ml-4 list-[lower-alpha] space-y-2">
            <li id="s8a">
              For the avoidance of doubt, this Public License does not, and
              shall not be interpreted to, reduce, limit, restrict, or impose
              conditions on any use of the Licensed Material that could lawfully
              be made without permission under this Public License.
            </li>
            <li id="s8b">
              To the extent possible, if any provision of this Public License is
              deemed unenforceable, it shall be automatically reformed to the
              minimum extent necessary to make it enforceable. If the provision
              cannot be reformed, it shall be severed from this Public License
              without affecting the enforceability of the remaining terms and
              conditions.
            </li>
            <li id="s8c">
              No term or condition of this Public License will be waived and no
              failure to comply consented to unless expressly agreed to by the
              Licensor.
            </li>
            <li id="s8d">
              Nothing in this Public License constitutes or may be interpreted
              as a limitation upon, or waiver of, any privileges and immunities
              that apply to the Licensor or You, including from the legal
              processes of any jurisdiction or authority.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
