import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
      user: "secretariat@groupekevaude.com",
      pass: "password123",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: `${name} <secretariat@groupekevaude.com>`,
      to: "secretariat@groupekevaude.com",
      subject: `${name} a visité votre site`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html
          xmlns="http://www.w3.org/1999/xhtml"
          xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office"
        >
          <head>
            <!--[if gte mso 9
              ]><xml
                ><o:OfficeDocumentSettings
                  ><o:AllowPNG /><o:PixelsPerInch
                    >96</o:PixelsPerInch
                  ></o:OfficeDocumentSettings
                ></xml
              ><!
            [endif]-->
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            <meta name="viewport" content="width=device-width" />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <title></title>
            <!--[if !mso]><!-->
            <!--<![endif]-->
            <style type="text/css">
              body {
                margin: 0;
                padding: 0;
              }
              table,
              td,
              tr {
                vertical-align: top;
                border-collapse: collapse;
              }
              * {
                line-height: inherit;
              }
              a[x-apple-data-detectors="true"] {
                color: inherit !important;
                text-decoration: none !important;
              }
            </style>
            <style type="text/css" id="media-query">
              @media (max-width: 520px) {
                .block-grid,
                .col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
                }
                .block-grid {
                  width: 100% !important;
                }
                .col {
                  width: 100% !important;
                }
                .col_cont {
                  margin: 0 auto;
                }
                img.fullwidth,
                img.fullwidthOnMobile {
                  max-width: 100% !important;
                }
                .no-stack .col {
                  min-width: 0 !important;
                  display: table-cell !important;
                }
                .no-stack.two-up .col {
                  width: 50% !important;
                }
                .no-stack .col.num2 {
                  width: 16.6% !important;
                }
                .no-stack .col.num3 {
                  width: 25% !important;
                }
                .no-stack .col.num4 {
                  width: 33% !important;
                }
                .no-stack .col.num5 {
                  width: 41.6% !important;
                }
                .no-stack .col.num6 {
                  width: 50% !important;
                }
                .no-stack .col.num7 {
                  width: 58.3% !important;
                }
                .no-stack .col.num8 {
                  width: 66.6% !important;
                }
                .no-stack .col.num9 {
                  width: 75% !important;
                }
                .no-stack .col.num10 {
                  width: 83.3% !important;
                }
                .video-block {
                  max-width: none !important;
                }
                .mobile_hide {
                  min-height: 0px;
                  max-height: 0px;
                  max-width: 0px;
                  display: none;
                  overflow: hidden;
                  font-size: 0px;
                }
                .desktop_hide {
                  display: block !important;
                  max-height: none !important;
                }
              }
            </style>
          </head>
          <body
            class="clean-body"
            style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #fafafa;"
          >
            <!--[if IE]><div class="ie-browser"><![endif]-->
            <table
              class="nl-container"
              style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fafafa; width: 100%;"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              width="100%"
              bgcolor="#fafafa"
              valign="top"
            >
              <tbody>
                <tr style="vertical-align: top;" valign="top">
                  <td
                    style="word-break: break-word; vertical-align: top;"
                    valign="top"
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#fafafa"><![endif]-->
                    <div style="background-color:transparent;">
                      <div
                        class="block-grid "
                        style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"
                      >
                        <div
                          style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"
                        >
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                          <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                          <div
                            class="col num12"
                            style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;"
                          >
                            <div
                              class="col_cont"
                              style="width:100% !important;"
                            >
                              <!--[if (!mso)&(!IE)]><!-->
                              <div
                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                              >
                                <!--<![endif]-->
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                <div
                                  style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                                >
                                  <div
                                    class="txtTinyMce-wrapper"
                                    style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"
                                  >
                                    <p
                                      style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 19px; margin: 0;"
                                    >
                                      <span style="font-size: 16px;"
                                        ><strong
                                          ><span style="color:#e84e4e;"
                                            >GROUPE KEVAUDE</span
                                          >&nbsp;</strong
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                <div
                                  style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                                >
                                  <div
                                    class="txtTinyMce-wrapper"
                                    style="line-height: 1.2; font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; color: #555555; mso-line-height-alt: 14px;"
                                  >
                                    <p
                                      style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"
                                    >
                                      <span style="font-size: 14px;"
                                        ><em
                                          ><strong
                                            >VOUS AVEZ REÇU UN MESSAGE VIA LE
                                            FORMULAIRE DU SITE WEB</strong
                                          ></em
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <table
                                  class="divider"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                  role="presentation"
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        class="divider_inner"
                                        style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                        valign="top"
                                      >
                                        <table
                                          class="divider_content"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;"
                                          align="center"
                                          role="presentation"
                                          valign="top"
                                        >
                                          <tbody>
                                            <tr
                                              style="vertical-align: top;"
                                              valign="top"
                                            >
                                              <td
                                                style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                valign="top"
                                              >
                                                <span></span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                <div
                                  style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                                >
                                  <div
                                    class="txtTinyMce-wrapper"
                                    style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"
                                  >
                                    <p
                                      style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;"
                                    >
                                      <strong>Nom:</strong> ${name}
                                    </p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                               
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                <div
                                  style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                                >
                                  <div
                                    class="txtTinyMce-wrapper"
                                    style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"
                                  >
                                    <p
                                      style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; mso-line-height-alt: 17px; margin: 0;"
                                    >
                                      <strong>Email:</strong> ${email}
                                    </p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <table
                                  class="divider"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                  role="presentation"
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        class="divider_inner"
                                        style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                        valign="top"
                                      >
                                        <table
                                          class="divider_content"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;"
                                          align="center"
                                          role="presentation"
                                          valign="top"
                                        >
                                          <tbody>
                                            <tr
                                              style="vertical-align: top;"
                                              valign="top"
                                            >
                                              <td
                                                style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                valign="top"
                                              >
                                                <span></span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                            </div>
                          </div>
                          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                        </div>
                      </div>
                    </div>
                    <div style="background-color:transparent;">
                      <div
                        class="block-grid mixed-two-up"
                        style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"
                      >
                        <div
                          style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"
                        >
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                          <!--[if (mso)|(IE)]><td align="center" width="125" style="background-color:transparent;width:125px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                          <div
                            class="col num3"
                            style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 123px; width: 125px;"
                          >
                            <div
                              class="col_cont"
                              style="width:100% !important;"
                            >
                              <!--[if (!mso)&(!IE)]><!-->
                              <div
                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                              >
                                <!--<![endif]-->
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                <div
                                  style="color:#393d47;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                                >
                                  <div
                                    class="txtTinyMce-wrapper"
                                    style="line-height: 1.2; font-size: 12px; color: #393d47; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"
                                  >
                                    <p
                                      style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;"
                                    >
                                      <strong
                                        ><span style="font-size: 14px;"
                                          >MESSAGE:</span
                                        ></strong
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                            </div>
                          </div>
                          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                          <!--[if (mso)|(IE)]></td><td align="center" width="375" style="background-color:transparent;width:375px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                          <div
                            class="col num9"
                            style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 369px; width: 375px;"
                          >
                            <div
                              class="col_cont"
                              style="width:100% !important;"
                            >
                              <!--[if (!mso)&(!IE)]><!-->
                              <div
                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                              >
                                <!--<![endif]-->
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                <div
                                  style="color:#393d47;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                                >
                                  <div
                                    class="txtTinyMce-wrapper"
                                    style="line-height: 1.2; font-size: 12px; color: #393d47; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"
                                  >
                                    <p
                                      style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: justify; mso-line-height-alt: 17px; margin: 0;"
                                    >
                                      ${message}
                                    </p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <table
                                  class="divider"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                  role="presentation"
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        class="divider_inner"
                                        style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                        valign="top"
                                      >
                                        <table
                                          class="divider_content"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;"
                                          align="center"
                                          role="presentation"
                                          valign="top"
                                        >
                                          <tbody>
                                            <tr
                                              style="vertical-align: top;"
                                              valign="top"
                                            >
                                              <td
                                                style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                valign="top"
                                              >
                                                <span></span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                            </div>
                          </div>
                          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                        </div>
                      </div>
                    </div>
                    <div style="background-color:#a06262;">
                      <div
                        class="block-grid "
                        style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"
                      >
                        <div
                          style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"
                        >
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#9078e2;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                          <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                          <div
                            class="col num12"
                            style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;"
                          >
                            <div
                              class="col_cont"
                              style="width:100% !important;"
                            >
                              <!--[if (!mso)&(!IE)]><!-->
                              <div
                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                              >
                                <!--<![endif]-->
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                <div
                                  style="color:#fafafa;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                                >
                                  <div
                                    class="txtTinyMce-wrapper"
                                    style="line-height: 1.2; font-size: 12px; color: #fafafa; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"
                                  >
                                    <p
                                      style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 14px; margin: 0;"
                                    >
                                      <span style="font-size: 12px;"
                                        >Tous droits réservés © 2023 | Développé
                                        par&nbsp;<a
                                          href="https://mbokartconcept.net/"
                                          rel="nofollow"
                                          style="color: #f9eded;"
                                          >Mbok'art Concept</a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                                <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                            </div>
                          </div>
                          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                        </div>
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if (IE)]></div><![endif]-->
          </body>
        </html> `,
    });

    console.log("Message sent: %s", emailRes.messageId);
  } catch (err) {
    res.status(400);
    console.log(err);
  }

  res.status(200).json(req.body);
};
