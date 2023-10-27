// import { 
//     FormControl,
//     FormLabel,
//     Input,
//     Stack,
//     useDisclosure

// } from "@chakra-ui/react"
// import React,{} from "react"

// const TextInput = React.forwardRef((props, ref) => {
//     return (
//       <FormControl>
//         <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
//         <Input ref={ref} id={props.id} {...props} />
//       </FormControl>
//     )
//   })
  
//   // 2. Create the form
//   const Form = ({ firstFieldRef, onCancel }) => {
//     return (
//       <Stack spacing={4}>
//         <TextInput id='Tim-kiem' defaultValue='Tim kiem' />
//         <ButtonGroup display='flex' justifyContent='flex-end'>

//         </ButtonGroup>
//       </Stack>
//     )
//   }
  
//   // 3. Create the Popover
//   // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
//   const PopoverForm = () => {
//     const { onOpen, onClose, isOpen } = useDisclosure()
//     const firstFieldRef = React.useRef(null)
  
//     return (
//       <>
//         <Box display='inline-block' mr={3}>
//          Tim kiem
//         </Box>
//         <Popover
//           isOpen={isOpen}
//           initialFocusRef={firstFieldRef}
//           onOpen={onOpen}
//           onClose={onClose}
//           placement='right'
//           closeOnBlur={false}
//         >
//           <PopoverTrigger>
//             <IconButton size='sm' icon={<SearchIcon />} />
//           </PopoverTrigger>
//           <PopoverContent p={5}>
//             <FocusLock returnFocus persistentFocus={false}>
//               <PopoverArrow />
//               <PopoverCloseButton />
//               <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
//             </FocusLock>
//           </PopoverContent>
//         </Popover>
//       </>
//     )
//   }
  
//   render(<PopoverForm />)