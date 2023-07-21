import { CustomFlowbiteTheme } from 'flowbite-react';

// Flowbite Components Theme Customizations
const tabTheme: CustomFlowbiteTheme = {
	tab: {
		base: 'flex flex-col gap2 border-none',
		tablist: {
			base: 'flex text-center border-b border-gray-200',
			styles: {
				underline: 'flex-wrap',
			},
			tabitem: {
				base: 'flex items-center justify-center px-4 pt-0 pb-2 rounded-0 text-sm font-medium first:ml-0 focus:ring-0 focus:outline-none ',
				styles: {
					underline: {
						base: 'rounded-0',
						active: {
							on: 'text-gray-200 rounded-0 border-b border-gray-200 active',
							off: 'border-b border-transparent text-[#666]',
						},
					},
				},
			},
		},
		tabpanel: 'py-1',
	},
};

export default tabTheme;
