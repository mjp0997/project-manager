import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';



// Actions
import { setContextPosition } from '@/actions/ui';



/**
 * Hook to implement context like menu functionality
 * 
 * Needs to be used together with ContextMenuContainer or a component wrapping it.
 * @param {Object} config configuration object
 * @param {number} config.menuWidth width of context like menu in px
 * @param {number} config.topOffset top separation from context like menu and trigger button
 * @returns {{
 *    menuButtonRef: Object,
 *    menuIsOpen: boolean,
 *    handleOpenMenu: () => null,
 *    handleCloseMenu: (e: MouseEvent) => null
 * }}
 */
export const useContextLikeMenu = ({menuWidth = 300, topOffset = 10} = {}) => {

   const dispatch = useDispatch();

   const menuButtonRef = useRef(null);

   const [menuIsOpen, setMenuIsOpen] = useState(false);

   const handleOpenMenu = () => {
      const { top, left, height } = menuButtonRef.current.getBoundingClientRect();

      const resolvedLeft = (left + menuWidth) > window.innerWidth ? window.innerWidth - menuWidth : left;

      const resolvedTop = top + height + topOffset;

      dispatch(setContextPosition(!menuIsOpen ? resolvedLeft : null, !menuIsOpen ? resolvedTop : null));

      setMenuIsOpen(current => !current);
   }

   const handleCloseMenu = (e) => {
      if (menuButtonRef.current && !menuButtonRef.current.contains(e.target) && menuButtonRef.current !== e.target) {
         setMenuIsOpen(false);
         dispatch(setContextPosition(null, null));
      }
   }

   return {
      menuButtonRef,
      menuIsOpen,
      handleOpenMenu,
      handleCloseMenu,
   }
}