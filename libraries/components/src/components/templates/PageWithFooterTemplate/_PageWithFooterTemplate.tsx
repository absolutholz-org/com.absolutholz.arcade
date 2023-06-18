import { SiteFooter } from "../../SiteFooter";
import { SiteTemplate } from "../SiteTemplate";
import type { PageWithFooterTemplateProps } from "./_PageWithFooterTemplate.annotations";

export function PageWithFooterTemplate ({children, pageTitle}: PageWithFooterTemplateProps ): JSX.Element {
    return (
        <SiteTemplate pageTitle={pageTitle}>
            {children}
            <SiteFooter appName={pageTitle} />
        </SiteTemplate>
    );
}
