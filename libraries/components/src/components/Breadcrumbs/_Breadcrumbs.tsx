import { IBreadcrumbs } from './_Breadcrumbs.types';
import * as S from './_Breadcrumbs.styled';
import { IconBreadcrumb, TextBreadcrumb } from './_Breadcrumb';

export function Breadcrumbs({
	breadcrumbs,
	label = 'Breadcrumb',
}: IBreadcrumbs): JSX.Element {
	return (
		<S.Breadcrumbs aria-label={label} as='nav' size='s'>
			<S.Breadcrumbs_List tag='ol'>
				{breadcrumbs.map((breadcrumb, index) => (
					<>
						{breadcrumb.icon ? (
							<IconBreadcrumb
								href={breadcrumb.href}
								isCurrentPage={index === breadcrumbs.length - 1}
								label={breadcrumb.label}
								icon={breadcrumb.icon}
							/>
						) : (
							<TextBreadcrumb
								href={breadcrumb.href}
								isCurrentPage={index === breadcrumbs.length - 1}
								label={breadcrumb.label}
								text={breadcrumb.text}
							/>
						)}
					</>
				))}
			</S.Breadcrumbs_List>
		</S.Breadcrumbs>
	);
}
