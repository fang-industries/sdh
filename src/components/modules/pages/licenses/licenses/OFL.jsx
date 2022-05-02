import Disclaimer from "../Disclaimer";
import Termination from "../Termination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
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
            SIL Open Font License{" "}
            <span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">
              Copyright © {props.copyright}
            </span>
          </p>
          <div className="mt-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              A free, libre and open source license specifically designed for
              fonts and related software based on our experience in font design
              and linguistic software engineering.
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
        <div className="space-y-4">
          <p className="text-xl font-semibold">Preamble</p>
          <p>
            The goals of the Open Font License (OFL) are to stimulate worldwide
            development of collaborative font projects, to support the font
            creation efforts of academic and linguistic communities, and to
            provide a free and open framework in which fonts may be shared and
            improved in partnership with others. The OFL allows the licensed
            fonts to be used, studied, modified and redistributed freely as long
            as they are not sold by themselves. The fonts, including any
            derivative works, can be bundled, embedded, redistributed and/or
            sold with any software provided that any reserved names are not used
            by derivative works. The fonts and derivatives, however, cannot be
            released under any other type of license. The requirement for fonts
            to remain under this license does not apply to any document created
            using the fonts or their derivatives.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-semibold">Definitions</p>
          <p>
            "Font Software" refers to the set of files released by the Copyright
            Holder(s) under this license and clearly marked as such. This may
            include source files, build scripts and documentation. "Reserved
            Font Name" refers to any names specified as such after the copyright
            statement(s). "Original Version" refers to the collection of Font
            Software components as distributed by the Copyright Holder(s).
            "Modified Version" refers to any derivative made by adding to,
            deleting, or substituting — in part or in whole — any of the
            components of the Original Version, by changing formats or by
            porting the Font Software to a new environment. "Author" refers to
            any designer, engineer, programmer, technical writer or other person
            who contributed to the Font Software.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-semibold">Permission & Conditions</p>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of the Font Software, to use, study, copy, merge,
            embed, modify, redistribute, and sell modified and unmodified copies
            of the Font Software, subject to the following conditions:
            <ol className="my-2 ml-4 list-decimal space-y-2">
              <li>
                Neither the Font Software nor any of its individual components,
                in Original or Modified Versions, may be sold by itself.
              </li>
              <li>
                Original or Modified Versions of the Font Software may be
                bundled, redistributed and/or sold with any software, provided
                that each copy contains the above copyright notice and this
                license. These can be included either as stand-alone text files,
                human-readable headers or in the appropriate machine-readable
                metadata fields within text or binary files as long as those
                fields can be easily viewed by the user.
              </li>
              <li>
                No Modified Version of the Font Software may use the Reserved
                Font Name(s) unless explicit written permission is granted by
                the corresponding Copyright Holder. This restriction only
                applies to the primary font name as presented to the users.
              </li>
              <li>
                The name(s) of the Copyright Holder(s) or the Author(s) of the
                Font Software shall not be used to promote, endorse or advertise
                any Modified Version, except to acknowledge the contribution(s)
                of the Copyright Holder(s) and the Author(s) or with their
                explicit written permission.
              </li>
              <li>
                The Font Software, modified or unmodified, in part or in whole,
                must be distributed entirely under this license, and must not be
                distributed under any other license. The requirement for fonts
                to remain under this license does not apply to any document
                created using the Font Software.
              </li>
            </ol>
          </p>
        </div>
        <Termination>
          This license becomes null and void if any of the above conditions are
          not met.
        </Termination>
        <Disclaimer>
          THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
          OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
          COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
          INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
          DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
          FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
          OTHER DEALINGS IN THE FONT SOFTWARE.
        </Disclaimer>
      </div>
    </div>
  );
}
