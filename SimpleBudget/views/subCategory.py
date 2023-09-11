from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from ..serializers import SubCategorySerializer
from ..models import SubCategory


class SubCategoryApiView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = SubCategorySerializer

    def get(self, request: Request):
        available_subcategories = SubCategory.objects.filter(user=request.user)
        serialized_categories = self.serializer_class(available_subcategories, many=True)
        return Response(data=serialized_categories.data, status=status.HTTP_200_OK)

    def post(self, request: Request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['user'] = request.user
            serializer.save()
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request: Request, pk: int):
        try:
            subCat = SubCategory.objects.get(user=request.user, pk=pk)
        except SubCategory.DoesNotExist:
            return Response({'detail': 'Sub category do not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.serializer_class(subCat, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            subCat = SubCategory.objects.get(pk=pk, user=request.user)
        except SubCategory.DoesNotExist:
            return Response({"detail": "Category not found"}, status=status.HTTP_404_NOT_FOUND)
        subCat.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
