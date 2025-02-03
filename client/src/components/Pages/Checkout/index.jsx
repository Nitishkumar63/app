import {
  Grid,
  TextField,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const Checkout = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Values:", formValues);
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-[90%]">
        <Grid container spacing={3}>
          {/* Billing Details */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Billing Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name *"
                  variant="outlined"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country *"
                  variant="outlined"
                  name="country"
                  value={formValues.country}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street address *"
                  variant="outlined"
                  placeholder="House number and street name"
                  name="streetAddress"
                  value={formValues.streetAddress}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Apartment, suite, unit, etc. (optional)"
                  variant="outlined"
                  name="apartment"
                  value={formValues.apartment}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Town / City *"
                  variant="outlined"
                  name="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="State / County *"
                  variant="outlined"
                  name="state"
                  value={formValues.state}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Postcode / ZIP *"
                  variant="outlined"
                  name="postcode"
                  value={formValues.postcode}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Your Order Section */}
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Your Order
                </Typography>
                <TableContainer
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Subtotal</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Static rows */}
                      <TableRow>
                        <TableCell>
                          <div style={{ display: "flex", gap: "1rem" }}>
                            <img
                              src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488541/1731488537574_KmYlElu1_048aca8ee860449f8dde8da4e34ee54d.jpg"
                              alt="image"
                              className="w-[70px] rounded-t-md object-contain"
                            />
                            <div>
                              <Typography variant="body2" fontWeight="bold">
                                A-Line Kurti With Sh...
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                Qty: 1
                              </Typography>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="right">₹1,300.00</TableCell>
                      </TableRow>
                      {/* Subtotal */}
                      <TableRow>
                        <TableCell colSpan={2}>
                          <Typography fontWeight="bold" align="right">
                            Subtotal: ₹1,300.00
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  size="large"
                  sx={{
                    marginTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "10px 0",
                  }}
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleSubmit}
                >
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Checkout;
